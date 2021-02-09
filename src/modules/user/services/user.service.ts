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
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelectService } from '@modules/prisma/prisma-select.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
    private prismaSelectService: PrismaSelectService,
  ) {}

  /* Queries */
  public async getUserByUniqueInput(
    where: UserWhereUniqueInput,
    info?: GraphQLResolveInfo,
  ): Promise<User> {
    const select = this.prismaSelectService.getValue(info);
    return await this.prisma.user.findUnique({
      ...select,
      where,
      rejectOnNotFound: true,
    });
  }

  public async getUserRandom(): Promise<User> {
    const [result] = await this.prisma.$queryRaw<User[]>(
      `SELECT * FROM "User" ORDER BY random() LIMIT 1`,
    );
    return result;
  }

  public async getFirstUser(
    args: FindFirstUserArgs,
    info?: GraphQLResolveInfo,
  ): Promise<User> {
    const select = this.prismaSelectService.getValue(info);
    return await this.prisma.user.findFirst({ ...args, ...select });
  }

  public async getManyUsers(
    args: FindManyUserArgs,
    info?: GraphQLResolveInfo,
  ): Promise<User[]> {
    const select = this.prismaSelectService.getValue(info);
    return await this.prisma.user.findMany({ ...args, ...select });
  }

  public async countManyUsers(args: FindManyUserArgs): Promise<number> {
    return await this.prisma.user.count({ ...args });
  }

  // Query relations
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

  /* Mutations*/
  public async createOneUser(data: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }

  public async upsertOneUser(data: CreateUserInput): Promise<User> {
    return await this.prisma.user.upsert({
      where: { email: data.email },
      create: { ...data },
      update: {},
    });
  }

  public async updateOneUser(
    where: UserWhereUniqueInput,
    data: UpdateUserInput,
  ): Promise<User> {
    try {
      return await this.prisma.user.update({
        data,
        where,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * [async description]
   *
   * @return  {[type]}  [return description]
   */
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
