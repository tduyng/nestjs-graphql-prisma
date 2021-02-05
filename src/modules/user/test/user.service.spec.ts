import { BatchPayload } from '@common/@generated/prisma';
import {
  FindManyUserArgs,
  UserCreateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from '@common/@generated/user';
import { Post } from '@modules/post/post.model';
import { PrismaService } from '@modules/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ChangePasswordInput, UpdateUserInput } from '../dto';
import { PasswordService } from '../services/password.service';
import { UserService } from '../services/user.service';
import { User } from '../user.model';

const oneUser = {
  id: 'some userId',
  email: 'some email',
  username: 'some-username',
  password: 'some password',
  profile: {
    id: 'some profileId',
    firstName: 'some first name',
    lastName: 'some last name',
  },
  posts: [
    {
      id: 'some postId1',
    },
    {
      id: 'some postId2',
    },
  ] as Post[],
} as User;

const arrayUsers = [oneUser, oneUser];

const findManyArgs = {
  where: { email: { contains: 'email' } },
} as FindManyUserArgs;

const userWhereUniqueInput = {
  email: 'some email',
} as UserWhereUniqueInput;

const dataUser = {
  email: 'some email',
  username: 'some username',
  password: 'some password',
} as UserCreateInput;

const batchPayload = { count: 1 } as BatchPayload;

describe('UserService', () => {
  let userService: UserService;
  let prismaService;
  let passwordService;

  const mockPrismaService = () => ({
    user: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
      create: jest.fn(),
      upsert: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
    $queryRaw: jest.fn(),
  });

  const mockPasswordService = () => ({
    validatePassword: jest.fn(),
    hashPassword: jest.fn(),
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
        {
          provide: PasswordService,
          useFactory: mockPasswordService,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
    passwordService = module.get<PasswordService>(PasswordService);
  });

  it('Should be defined', () => {
    expect(userService).toBeDefined();
  });

  /* Queries test */
  describe('getUserByUniqueInput', () => {
    it('Should return an user', async () => {
      prismaService.user.findUnique.mockReturnValue(oneUser);
      const result = await userService.getUserByUniqueInput(
        userWhereUniqueInput,
      );
      expect(result).toEqual(oneUser);
    });
  });

  describe('getPostsOfUser', () => {
    it('Should return an array of posts', async () => {
      prismaService.user.findUnique.mockReturnValue(oneUser);
      const result = await userService.getPostsOfUser(oneUser.id);
      expect(result).toEqual(oneUser.posts);
    });
  });

  describe('getProfileOfUser', () => {
    it('Should return an profile', async () => {
      prismaService.user.findUnique.mockReturnValue(oneUser);
      const result = await userService.getProfileOfUser(oneUser.id);
      expect(result).toEqual(oneUser.profile);
    });
  });

  describe('getUserRandom', () => {
    it('Should return an user', async () => {
      prismaService.$queryRaw.mockReturnValue(oneUser);
      const result = userService.getUserRandom();
      expect(result).toEqual(result);
    });
  });

  describe('getFirstUser', () => {
    it('Should return an user', async () => {
      prismaService.user.findFirst.mockReturnValue(oneUser);
      const result = await userService.getFirstUser(findManyArgs);
      expect(prismaService.user.findFirst).toHaveBeenCalledWith({
        ...findManyArgs,
      });
      expect(result).toEqual(oneUser);
    });
  });

  describe('getManyUsers', () => {
    it('Should return an array of users', async () => {
      prismaService.user.findMany.mockReturnValue(arrayUsers);
      const result = await userService.getManyUsers(findManyArgs);
      expect(prismaService.user.findMany).toHaveBeenCalledWith({
        ...findManyArgs,
      });
      expect(result).toEqual(arrayUsers);
    });
  });

  describe('countManyUsers', () => {
    it('Should return an number', async () => {
      prismaService.user.count.mockReturnValue(1);
      const result = await userService.countManyUsers(findManyArgs);
      expect(prismaService.user.count).toHaveBeenCalledWith({
        ...findManyArgs,
      });
      expect(result).toEqual(1);
    });
  });

  /* Test mutation method */
  describe('createOneUser', () => {
    it('Should return an user', async () => {
      prismaService.user.create.mockReturnValue(oneUser);
      const result = await userService.createOneUser(dataUser);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: dataUser,
      });
      expect(result).toEqual(oneUser);
    });
  });

  describe('upsertOneUser', () => {
    it('Should return an user', async () => {
      prismaService.user.upsert.mockReturnValue(oneUser);
      const result = await userService.upsertOneUser(dataUser);
      expect(prismaService.user.upsert).toHaveBeenCalledWith({
        where: {
          email: dataUser.email,
        },
        create: { ...dataUser },
        update: {},
      });
      expect(result).toEqual(oneUser);
    });
  });

  describe('updateOneUser', () => {
    it('Should return an user', async () => {
      prismaService.user.update.mockReturnValue(oneUser);
      const result = await userService.updateOneUser(
        userWhereUniqueInput,
        dataUser,
      );
      expect(prismaService.user.update).toHaveBeenCalledWith({
        data: dataUser,
        where: userWhereUniqueInput,
      });
      expect(result).toEqual(oneUser);
    });
  });

  describe('updateManyUser', () => {
    it('Should return { count: number } as the result', async () => {
      prismaService.user.updateMany.mockReturnValue(batchPayload);
      const result = await userService.updateManyUsers(
        { email: { contains: 'email' } } as UserWhereInput,
        { username: 'some thing' } as UpdateUserInput,
      );
      expect(result).toEqual(batchPayload);
    });
  });

  describe('deleteOneUser', () => {
    it('Should return an deleted user', async () => {
      prismaService.user.delete.mockReturnValue(oneUser);
      const result = await userService.deleteOneUser(userWhereUniqueInput);
      expect(result).toEqual(oneUser);
    });
  });

  describe('deleteManyUser', () => {
    it('Should return a batch payload: {count: number}', async () => {
      prismaService.user.deleteMany.mockReturnValue(batchPayload);
      const result = await userService.deleteManyUsers({
        email: { contains: 'email' },
      } as UserWhereInput);
      expect(result).toEqual(result);
    });
  });

  describe('changePassword', () => {
    it('Should throw error when oldPassword not matched', async () => {
      passwordService.validatePassword.mockReturnValue(false);
      try {
        await userService.changePassword(oneUser.id, oneUser.password, {
          oldPassword: 'some old password',
          newPassword: 'some new password',
        } as ChangePasswordInput);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
      }
    });

    it('Should change password successfully', async () => {
      passwordService.validatePassword.mockReturnValue(true);
      prismaService.user.update.mockReturnValue(oneUser);
      const result = await userService.changePassword(
        oneUser.id,
        oneUser.password,
        {
          oldPassword: 'some old password',
          newPassword: 'some new password',
        } as ChangePasswordInput,
      );
      expect(result).toEqual(oneUser);
    });
  });
});
