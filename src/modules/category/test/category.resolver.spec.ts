import { Post } from '@modules/post/post.model';
import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import { CategoryResolver } from '../category.resolver';
import { CreateCategoryInput } from '../dto';
import { CategoryWhereUniqueInput } from '@common/@generated/category';

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

describe('CategoryResolver', () => {
  let categoryResolver: CategoryResolver;
  let categoryService;

  const mockCategoryService = () => ({
    getCategories: jest.fn(),
    getPostsOfCategory: jest.fn(),
    getCategoryByUniqueInput: jest.fn(),
    createCategory: jest.fn(),
    updateCategory: jest.fn(),
    deleteCategory: jest.fn(),
    createCategories: jest.fn(),
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryResolver,
        {
          provide: CategoryService,
          useFactory: mockCategoryService,
        },
      ],
    }).compile();

    categoryResolver = module.get<CategoryResolver>(CategoryResolver);
    categoryService = module.get<CategoryService>(CategoryService);
  });

  it('Should be defined', () => {
    expect(categoryResolver).toBeDefined();
  });

  describe('categories', () => {
    it('Should return an array of category', async () => {
      categoryService.getCategories.mockReturnValue(arrayCategory);
      const result = await categoryResolver.categories({});
      expect(result).toEqual(arrayCategory);
    });
  });

  describe('category', () => {
    it('Should return category', async () => {
      categoryService.getCategoryByUniqueInput.mockReturnValue(oneCategory);
      const result = await categoryResolver.category(categoryWhereUniqueInput);
      expect(result).toEqual(oneCategory);
    });
  });

  describe('posts', () => {
    it('Should return an array of post from query', async () => {
      categoryService.getPostsOfCategory.mockReturnValue(oneCategory.posts);
      const result = await categoryResolver.posts(oneCategory);
      expect(result).toEqual(oneCategory.posts);
    });
  });

  describe('createCategory', () => {
    it('Should return an category', async () => {
      categoryService.createCategory.mockReturnValue(oneCategory);
      const result = await categoryResolver.createCategory(categoryInput);
      expect(result).toEqual(oneCategory);
    });
  });

  describe('createCategories', () => {
    it('Should return an category', async () => {
      categoryService.createCategories.mockReturnValue([
        oneCategory,
        oneCategory,
      ]);
      const result = await categoryResolver.createCategories([
        categoryInput,
        categoryInput,
      ]);
      expect(result).toEqual([oneCategory, oneCategory]);
    });
  });

  describe('updateCategory', () => {
    it('Should return an Category as result', async () => {
      categoryService.updateCategory.mockReturnValue(oneCategory);
      const result = await categoryResolver.updateCategory(
        oneCategory,
        categoryInput,
      );
      expect(result).toEqual(oneCategory);
    });
  });

  describe('deleteCategory', () => {
    it('Should return an category', async () => {
      categoryService.deleteCategory.mockReturnValue(oneCategory);
      const result = await categoryResolver.deleteCategory(
        categoryWhereUniqueInput,
      );
      expect(result).toEqual(oneCategory);
    });
  });
});
