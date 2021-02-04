import { PrismaService } from '@modules/prisma/prisma.service';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ChangePasswordInput } from '../dto/change-password.input';
import { PasswordService } from './password.service';
import { UpdateUserInput } from '../dto';
import { User } from '../user.model';
import { Post } from '@modules/post/post.model';
import { Profile } from '@modules/profile/profile.model';
import { UserWhereUniqueInput } from '@common/@generated/user';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

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

  public async updateOneUser(userId: string, newUserData: UpdateUserInput) {
    try {
      return await this.prisma.user.update({
        data: newUserData,
        where: {
          id: userId,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteOneUser(where: UserWhereUniqueInput): Promise<User> {
    try {
      return await this.prisma.user.delete({ where });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async changePassword(
    userId: string,
    userPassword: string,
    changePasswordInput: ChangePasswordInput,
  ) {
    try {
      const { newPassword, oldPassword } = changePasswordInput;
      const passwordValid = await this.passwordService.validatePassword(
        oldPassword,
        userPassword,
      );

      if (!passwordValid) {
        throw new BadRequestException('Invalid password');
      }
      const hashedPassword = await this.passwordService.hashPassword(
        newPassword,
      );
      return await this.prisma.user.update({
        where: { id: userId },
        data: {
          password: hashedPassword,
        },
      });
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
