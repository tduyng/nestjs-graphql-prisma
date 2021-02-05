import { Post } from '@modules/post/post.model';
import { Test, TestingModule } from '@nestjs/testing';
import { ChangePasswordInput, UpdateUserInput } from '../dto';
import { UserService } from '../services/user.service';
import { User } from '../user.model';
import { UserResolver } from '../resolvers/user.resolver';
import { Profile } from '@modules/profile/profile.model';

const oneUser = {
  id: 'some userId',
  email: 'some email',
  password: 'some password',
  profile: {
    username: 'some-username',
  } as Profile,
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

describe('UserResolver', () => {
  let userResolver: UserResolver;
  let userService;

  const mockUserService = () => ({
    updateOneUser: jest.fn(),
    changePassword: jest.fn(),
    getPostsOfUser: jest.fn(),
    getUserByUniqueInput: jest.fn(),
    getProfileOfUser: jest.fn(),
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useFactory: mockUserService,
        },
      ],
    }).compile();

    userResolver = module.get<UserResolver>(UserResolver);
    userService = module.get<UserService>(UserService);
  });

  it('Should be defined', () => {
    expect(userResolver).toBeDefined();
  });

  describe('me', () => {
    it('Should return user', async () => {
      const result = await userResolver.me(oneUser);
      expect(result).toEqual(oneUser);
    });
  });

  describe('profile', () => {
    it('Should return profile of user', async () => {
      userService.getProfileOfUser.mockReturnValue(oneUser.profile);
      const result = await userResolver.profile(oneUser);
      expect(result).toEqual(oneUser.profile);
    });
  });

  describe('posts', () => {
    it('Should return an array of post of user from query', async () => {
      userService.getPostsOfUser.mockReturnValue(oneUser.posts);
      const result = await userResolver.posts(oneUser);
      expect(result).toEqual(oneUser.posts);
    });
  });

  describe('updateAccount', () => {
    it('Should return an User as result', async () => {
      userService.updateOneUser.mockReturnValue(oneUser);
      const result = await userResolver.updateAccount(oneUser, userInput);
      expect(result).toEqual(oneUser);
    });
  });

  describe('changePassword', () => {
    it('Should return User after change password successfully', async () => {
      userService.changePassword.mockReturnValue(oneUser);
      const result = await userResolver.changePassword(oneUser, {
        oldPassword: 'some old password',
        newPassword: 'some new password',
      } as ChangePasswordInput);
      expect(result).toEqual(oneUser);
    });
  });
});
