import { PrismaService } from '@modules/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../post.service';
import { User } from '@modules/user/user.model';
import { CreatePostInput } from '../dto';
import { Post, PostWhereUniqueInput } from '@common/@generated/post';
import { CategoryService } from '@modules/category/category.service';
import { Category } from '@modules/category/category.model';
import { PrismaSelectService } from '@modules/prisma/prisma-select.service';

const oneUser = {
  id: 'some userId',
  email: 'some email',
} as User;

const onePost = {
  id: 'some postId',
  title: 'some title',
  content: 'some content',
  author: oneUser,
} as Post;

const postInput = {
  title: 'some title',
  content: 'some content',
  categories: [
    {
      name: 'Web development',
    },
    {
      name: 'Monorepo',
    },
  ],
} as CreatePostInput;
const oneCategory = {
  id: 'some id',
  name: 'name name',
} as Category;

const arrayPost = [onePost, onePost];

const postWhereUniqueInput = {
  id: 'some postId',
} as PostWhereUniqueInput;

describe('PostService', () => {
  let postService: PostService;
  let prismaService;
  let categoryService;

  const mockPrismaService = () => ({
    post: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      upsert: jest.fn(),
    },
  });

  const mockCategoryService = () => ({
    createCategories: jest.fn(),
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: CategoryService,
          useFactory: mockCategoryService,
        },
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
        {
          provide: PrismaSelectService,
          useValue: {
            getValue: jest.fn().mockReturnValue({}),
          },
        },
      ],
    }).compile();

    postService = module.get<PostService>(PostService);
    prismaService = module.get<PrismaService>(PrismaService);
    categoryService = module.get<CategoryService>(CategoryService);
  });

  it('Should be defined', () => {
    expect(postService).toBeDefined();
  });

  describe('getPosts', () => {
    it('Should return an array post', async () => {
      prismaService.post.findMany.mockReturnValue(arrayPost);
      const result = await postService.getPosts({});
      expect(result).toEqual(arrayPost);
    });
  });

  describe('getPost', () => {
    it('Should return an post', async () => {
      prismaService.post.findUnique.mockReturnValue(onePost);
      const result = await postService.getPost(postWhereUniqueInput);
      expect(result).toEqual(onePost);
    });
  });

  describe('getAuthorOfPost', () => {
    it('Should return an post', async () => {
      prismaService.post.findUnique.mockReturnValue(onePost);
      const result = await postService.getAuthorOfPost(postWhereUniqueInput);
      expect(result).toEqual(onePost.author);
    });
  });

  describe('createPost', () => {
    it('Should return an user after created successfully', async () => {
      prismaService.post.create.mockReturnValue(onePost);
      categoryService.createCategories.mockReturnValue([oneCategory]);
      const result = await postService.createPost(postInput, oneUser);
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
