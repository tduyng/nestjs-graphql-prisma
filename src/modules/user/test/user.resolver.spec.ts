import { UserWhereUniqueInput } from '@common/@generated/user';
import { Post } from '@modules/post/post.model';
import { Test, TestingModule } from '@nestjs/testing';
import { ChangePasswordInput, UpdateUserInput } from '../dto';
import { UserService } from '../services/user.service';
import { User } from '../user.model';
import { UserResolver } from '../user.resolver';

const oneUser = {
  id: 'some userId',
  email: 'some email',
  username: 'some-username',
  password: 'some password',
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

describe('UserResolver', () => {
  let userResolver: UserResolver;
  let userService;

  const mockUserService = () => ({
    updateUser: jest.fn(),
    changePassword: jest.fn(),
    getPostsOfUser: jest.fn(),
    getUserByUniqueInput: jest.fn(),
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
    it('Should be implemented later with auth', () => {
      expect('me').toEqual('me');
    });
  });

  describe('user', () => {
    it('Should return user', async () => {
      userService.getUserByUniqueInput.mockReturnValue(oneUser);
      const result = await userResolver.user(userWhereUniqueInput);
      expect(result).toEqual(oneUser);
    });
  });

  describe('posts', () => {
    it('Should return an array of post from query', async () => {
      userService.getPostsOfUser.mockReturnValue(oneUser.posts);
      const result = await userResolver.posts(oneUser);
      expect(result).toEqual(oneUser.posts);
    });
  });

  describe('updateUser', () => {
    it('Should return an User as result', async () => {
      userService.updateUser.mockReturnValue(oneUser);
      const result = await userResolver.updateUser(oneUser, userInput);
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
