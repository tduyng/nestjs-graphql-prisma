import { Post } from '@common/@generated/post/post.model';
import { BatchPayload } from '@common/@generated/prisma';
import {
  FindManyUserArgs,
  UserCreateInput,
  UserWhereInput,
  UserWhereUniqueInput
} from '@common/@generated/user';
import { Test, TestingModule } from '@nestjs/testing';
import { AdminResolver } from '../resolvers/admin-user.resolver';
import { UserService } from '../services/user.service';
import { User } from '../user.model';

const oneUser = {
  id: 'some userId',
  email: 'some email',

  password: 'some password',
  profile: {
    id: 'some profileId',
    username: 'some-username',
    firstName: 'some first name',
    lastName: 'some last name'
  },
  posts: [
    {
      id: 'some postId1'
    },
    {
      id: 'some postId2'
    }
  ] as Post[]
} as User;

const arrayUsers = [oneUser, oneUser];

const findManyArgs = {
  where: { email: { contains: 'email' } }
} as FindManyUserArgs;

const userWhereUniqueInput = {
  email: 'some email'
} as UserWhereUniqueInput;

const userWhereInput = {
  email: { contains: 'email' }
} as UserWhereInput;

const dataUser = {
  email: 'some email',
  username: 'some username',
  password: 'some password'
} as UserCreateInput;

const batchPayload = { count: 1 } as BatchPayload;

describe('adminResolver', () => {
  let adminResolver: AdminResolver;
  let userService;

  const mockUserService = () => ({
    getUserByUniqueInput: jest.fn(),
    getFirstUser: jest.fn(),
    getManyUsers: jest.fn(),
    countManyUsers: jest.fn(),
    createOneUser: jest.fn(),
    upsertOneUser: jest.fn(),
    updateOneUser: jest.fn(),
    updateManyUsers: jest.fn(),
    deleteOneUser: jest.fn(),
    deleteManyUsers: jest.fn()
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminResolver,
        {
          provide: UserService,
          useFactory: mockUserService
        }
      ]
    }).compile();

    adminResolver = module.get<AdminResolver>(AdminResolver);
    userService = module.get<UserService>(UserService);
  });

  it('Should be defined', () => {
    expect(adminResolver).toBeDefined();
  });

  describe('adminFindUniqueUser', () => {
    it('Should return an user', async () => {
      userService.getUserByUniqueInput.mockReturnValue(oneUser);
      const result = await adminResolver.adminFindUniqueUser(
        userWhereUniqueInput
      );
      expect(result).toEqual(oneUser);
    });
  });

  describe('adminFindFirstUser', () => {
    it('Should return an user', async () => {
      userService.getFirstUser.mockReturnValue(oneUser);
      const result = await adminResolver.adminFindFirstUser(findManyArgs);
      expect(result).toEqual(oneUser);
    });
  });
  describe('adminFindManyUser', () => {
    it('Should return an array of users', async () => {
      userService.getManyUsers.mockReturnValue(arrayUsers);
      const result = await adminResolver.adminFindManyUser(findManyArgs);
      expect(result).toEqual(arrayUsers);
    });
  });

  describe('adminCountManyUsers', () => {
    it('Should return a number count', async () => {
      userService.countManyUsers.mockReturnValue(2);
      const result = await adminResolver.adminCountManyUsers(findManyArgs);
      expect(result).toEqual(2);
    });
  });

  describe('adminCreateOneUser', () => {
    it('Should return a user', async () => {
      userService.createOneUser.mockReturnValue(oneUser);
      const result = await adminResolver.adminCreateOneUser(dataUser);
      expect(result).toEqual(oneUser);
    });
  });

  describe('adminUpsertOneUser', () => {
    it('Should return a user', async () => {
      userService.upsertOneUser.mockReturnValue(oneUser);
      const result = await adminResolver.adminUpsertOneUser(dataUser);
      expect(result).toEqual(oneUser);
    });
  });

  describe('adminUpdateOneUser', () => {
    it('Should return a user', async () => {
      userService.updateOneUser.mockReturnValue(oneUser);
      const result = await adminResolver.adminUpdateOneUser(
        userWhereUniqueInput,
        dataUser
      );
      expect(result).toEqual(oneUser);
    });
  });

  describe('adminUpdateManyUser', () => {
    it('Should return a batch payload {count: number }', async () => {
      userService.updateManyUsers.mockReturnValue(batchPayload);
      const result = await adminResolver.adminUpdateManyUser(
        userWhereInput,
        dataUser
      );
      expect(result).toEqual(batchPayload);
    });
  });

  describe('adminDeleteOneUser', () => {
    it('Should return a deleted user', async () => {
      userService.deleteOneUser.mockReturnValue(oneUser);
      const result = await adminResolver.adminDeleteOneUser(
        userWhereUniqueInput
      );
      expect(result).toEqual(oneUser);
    });
  });

  describe('adminDeleteManyUser', () => {
    it('Should return a batch payload {count: number }', async () => {
      userService.deleteManyUsers.mockReturnValue(batchPayload);
      const result = await adminResolver.adminDeleteManyUser(userWhereInput);
      expect(result).toEqual(batchPayload);
    });
  });
});
