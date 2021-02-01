import { PrismaService } from '@modules/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ChangePasswordInput } from '../dto/change-password.input';
import { PasswordService } from './password.service';
import { UserWhereUniqueInput, UpdateUserInput } from '../dto';
import { User } from '../user.model';
import { Post } from '@modules/post/post.model';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  public async updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
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

  public async getUserByUniqueInput(where: UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where,
      rejectOnNotFound: true,
    });
  }
}
