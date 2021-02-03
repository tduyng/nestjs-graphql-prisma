import { Post } from '@modules/post/post.model';
import { PrismaService } from '@modules/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { CategoryWhereUniqueInput } from '../dto/category-where-unique.input';
import { CreateCategoryInput } from '../dto/create-category.input';

const oneCategory = {
  id: 'some categoryId',
  name: 'some name',
  slug: 'some-name',
  posts: [
    {
      id: 'some postId1',
    },
    {
      id: 'some postId2',
    },
  ] as Post[],
} as Category;

const arrayCategory = [
  {
    id: 'some categoryId 1',
  },
  {
    id: 'some categoryId 2',
  },
] as Category[];

const categoryInput = {
  name: 'some name',
} as CreateCategoryInput;

const categoryWhereUniqueInput = {
  id: 'some categoryId',
  slug: 'some-name',
} as CategoryWhereUniqueInput;

describe('CategoryService', () => {
  let categoryService: CategoryService;
  let prismaService;

  const mockPrismaService = () => ({
    category: {
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
      upsert: jest.fn(),
    },
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
      ],
    }).compile();

    categoryService = module.get<CategoryService>(CategoryService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('Should be defined', () => {
    expect(categoryService).toBeDefined();
  });

  describe('getCategories', () => {
    it('Should return an array of category', async () => {
      prismaService.category.findMany.mockReturnValue(arrayCategory);
      const result = await categoryService.getCategories();
      expect(result).toEqual(arrayCategory);
    });
  });

  describe('getCategoryByUniqueInput', () => {
    it('Should return an category', async () => {
      prismaService.category.findUnique.mockReturnValue(oneCategory);
      const result = await categoryService.getCategoryByUniqueInput(
        categoryWhereUniqueInput,
      );
      expect(result).toEqual(oneCategory);
    });
  });

  describe('getPostsOfCategory', () => {
    it('Should return an array of posts', async () => {
      prismaService.category.findUnique.mockReturnValue(oneCategory);
      const result = await categoryService.getPostsOfCategory(oneCategory.id);
      expect(result).toEqual(oneCategory.posts);
    });
  });

  describe('createCategory', () => {
    it('Should return an user after created successfully', async () => {
      prismaService.category.upsert.mockReturnValue(oneCategory);
      const result = await categoryService.createCategory(categoryInput);
      expect(result).toEqual(oneCategory);
    });
  });

  describe('createCategories', () => {
    it('Should return an array of categories after created successfully', async () => {
      prismaService.category.upsert.mockReturnValue(oneCategory);
      const result = await categoryService.createCategories([
        categoryInput,
        categoryInput,
      ]);
      expect(result).toEqual([oneCategory, oneCategory]);
    });
  });

  describe('updateCategory', () => {
    it('Should return an category', async () => {
      prismaService.category.update.mockReturnValue(oneCategory);
      const result = await categoryService.updateCategory(
        categoryWhereUniqueInput,
        categoryInput,
      );
      expect(result).toEqual(oneCategory);
    });
  });

  describe('deleteCategory', () => {
    it('Should return an category', async () => {
      prismaService.category.delete.mockReturnValue(oneCategory);
      const result = await categoryService.deleteCategory(
        categoryWhereUniqueInput,
      );
      expect(result).toEqual(oneCategory);
    });
  });
});
