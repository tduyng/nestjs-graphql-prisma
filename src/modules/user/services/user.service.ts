import { PrismaService } from '@modules/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ChangePasswordInput } from '../dto/change-password.input';
import { PasswordService } from './password.service';
import { UserWhereUniqueInput, UpdateUserInput } from '../dto';
import { User } from '../user.model';
import { Post } from '@modules/post/post.model';
import { Profile } from '@modules/profile/profile.model';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  public async updateUser(userId: string, newUserData: UpdateUserInput) {
    return await this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  public async changePassword(
    userId: string,
    userPassword: string,
    changePasswordInput: ChangePasswordInput,
  ) {
    const { newPassword, oldPassword } = changePasswordInput;
    const passwordValid = await this.passwordService.validatePassword(
      oldPassword,
      userPassword,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }
    const hashedPassword = await this.passwordService.hashPassword(newPassword);
    return await this.prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });
  }

  public async getPostsOfUser(userId: string): Promise<Post[]> {
    const user: User = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        posts: true,
      },
    });
    return user.posts;
  }
  public async getProfileOfUser(userId: string): Promise<Profile> {
    const user: User = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });
    return user.profile;
  }

  public async getUserByUniqueInput(where: UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where,
      rejectOnNotFound: true,
    });
  }

  public async getUserRandom() {
    const [result] = await this.prisma.$queryRaw<User[]>(
      `SELECT * FROM "User" ORDER BY random() LIMIT 1`,
    );
    return result;
  }
}
