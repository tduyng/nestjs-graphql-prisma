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
import {
  FindFirstUserArgs,
  FindManyUserArgs,
  UserWhereInput,
  UserWhereUniqueInput,
} from '@common/@generated/user';
import { CreateUserInput } from '../dto/create-user.input';
import { BatchPayload } from '@common/@generated/prisma';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  /* Queries */
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

  public async getFirstUser(args: FindFirstUserArgs) {
    return await this.prisma.user.findFirst({ ...args });
  }

  public async getManyUsers(args: FindManyUserArgs) {
    return await this.prisma.user.findMany({ ...args });
  }

  public async countManyUsers(args: FindManyUserArgs) {
    return await this.prisma.user.count({ ...args });
  }

  /* Mutations*/
  public async createOneUser(data: CreateUserInput) {
    return await this.prisma.user.create({
      data,
    });
  }

  public async upsertOneUser(data: CreateUserInput) {
    return await this.prisma.user.upsert({
      where: { email: data.email },
      create: { ...data },
      update: {},
    });
  }

  public async updateOneUser(
    where: UserWhereUniqueInput,
    newUserData: UpdateUserInput,
  ) {
    try {
      return await this.prisma.user.update({
        data: newUserData,
        where,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateManyUsers(
    where: UserWhereInput,
    data: UpdateUserInput,
  ): Promise<BatchPayload> {
    try {
      return await this.prisma.user.updateMany({
        where,
        data,
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

  public async deleteManyUsers(where: UserWhereInput): Promise<BatchPayload> {
    try {
      return await this.prisma.user.deleteMany({ where });
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
