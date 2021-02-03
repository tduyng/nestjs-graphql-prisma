import { PrismaService } from '@modules/prisma/prisma.service';
import { Post } from '@modules/post/post.model';
import { CreateCategoryInput, UpdateCategoryInput } from './dto';
import slugify from 'slugify';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category } from './category.model';
import {
  CategoryWhereUniqueInput,
  FindManyCategoryArgs,
} from '@common/@generated/category';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  public async getCategories(args: FindManyCategoryArgs) {
    return await this.prisma.category.findMany({ ...args });
  }

  public async getPostsOfCategory(categoryId: string): Promise<Post[]> {
    const category: Category = await this.prisma.category.findUnique({
      where: { id: categoryId },
      include: {
        posts: true,
      },
    });
    return category.posts;
  }

  public async getCategoryByUniqueInput(where: CategoryWhereUniqueInput) {
    return await this.prisma.category.findUnique({
      where,
      rejectOnNotFound: true,
    });
  }

  public async createCategory(categoryInput: CreateCategoryInput) {
    try {
      const { name } = categoryInput;
      const slug = slugify(name, { lower: true });
      return await this.prisma.category.upsert({
        where: { slug: slug },
        create: {
          name,
          slug,
        },
        update: {},
      });
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async createCategories(
    categories: CreateCategoryInput[],
  ): Promise<Category[]> {
    const result: Category[] = [];
    try {
      for (const category of categories) {
        const slug = slugify(category.name);
        const cat = await this.prisma.category.upsert({
          where: { slug: slug },
          create: {
            name: category.name,
            slug: slug,
          },
          update: {},
        });
        result.push(cat);
      }
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateCategory(
    where: CategoryWhereUniqueInput,
    categoryInput: UpdateCategoryInput,
  ) {
    try {
      return await this.prisma.category.update({
        where,
        data: categoryInput,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteCategory(
    where: CategoryWhereUniqueInput,
  ): Promise<Category> {
    try {
      return await this.prisma.category.delete({ where });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
