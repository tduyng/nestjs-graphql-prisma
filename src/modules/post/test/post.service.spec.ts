import { PrismaService } from '@modules/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../post.service';
import { User } from '@modules/user/user.model';
import { UserWhereUniqueInput } from '@modules/user/dto';

const oneUser = {
  id: 'some postId',
  email: 'some email',
  username: 'some-username',
} as User;

const postInput = {
  firstName: 'some first name',
  lastName: 'some last name',
  bio: 'some bio',
} as CreatePostInput;

const postWhereUniqueInput = {
  id: 'some postId',
} as PostWhereUniqueInput;

const userWhereUniqueInput = {
  id: 'some userId',
} as UserWhereUniqueInput;

describe('PostService', () => {
  let postService: PostService;
  let prismaService;

  const mockPrismaService = () => ({
    post: {
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
      ],
    }).compile();

    postService = module.get<PostService>(PostService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('Should be defined', () => {
    expect(postService).toBeDefined();
  });

  describe('getPost', () => {
    it('Should return an post', async () => {
      prismaService.post.findUnique.mockReturnValue(onePost);
      const result = await postService.getPost(postWhereUniqueInput);
      expect(result).toEqual(onePost);
    });
  });

  describe('getPostByUser', () => {
    it('Should return an post', async () => {
      prismaService.post.findMany.mockReturnValue([onePost]);
      const result = await postService.getPostByUser(userWhereUniqueInput);
      expect(result).toEqual(onePost);
    });
  });

  describe('getUserOfPost', () => {
    it('Should return an post', async () => {
      prismaService.post.findUnique.mockReturnValue(onePost);
      const result = await postService.getUserOfPost(postWhereUniqueInput);
      expect(result).toEqual(onePost.user);
    });
  });

  describe('createPost', () => {
    it('Should return an user after created successfully', async () => {
      prismaService.post.create.mockReturnValue(onePost);
      const input = postInput;
      const user = oneUser;
      const result = await postService.createPost({
        input,
        user,
      });
      expect(result).toEqual(onePost);
    });
  });

  describe('updatePost', () => {
    it('Should return an post', async () => {
      prismaService.post.update.mockReturnValue(onePost);
      const result = await postService.updatePost(
        postWhereUniqueInput,
        postInput,
      );
      expect(result).toEqual(onePost);
    });
  });

  describe('deletePost', () => {
    it('Should return an post', async () => {
      prismaService.post.delete.mockReturnValue(onePost);
      const result = await postService.deletePost(postWhereUniqueInput);
      expect(result).toEqual(onePost);
    });
  });
});
