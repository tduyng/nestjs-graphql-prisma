import { Post } from '@modules/post/post.model';
import { PrismaService } from '@modules/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  ChangePasswordInput,
  UpdateUserInput,
  UserWhereUniqueInput,
} from '../dto';
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

const userInput = {
  username: 'some-username',
  email: 'some email',
} as UpdateUserInput;

const userWhereUniqueInput = {
  email: 'some email',
} as UserWhereUniqueInput;

describe('UserService', () => {
  let userService: UserService;
  let prismaService;
  let passwordService;

  const mockPrismaService = () => ({
    user: {
      update: jest.fn(),
      findUnique: jest.fn(),
    },
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

  describe('updateUser', () => {
    it('Should return an user', async () => {
      prismaService.user.update.mockReturnValue(oneUser);
      const result = await userService.updateUser(oneUser.id, userInput);
      expect(result).toEqual(oneUser);
    });
  });

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
