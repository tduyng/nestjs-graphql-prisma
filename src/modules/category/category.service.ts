import { PrismaService } from '@modules/prisma/prisma.service';
import { Post } from '@modules/post/post.model';
import { CategoryWhereUniqueInput } from './dto/category-where-unique.input';
import { CreateCategoryInput } from './dto/create-category.input';
import slugify from 'slugify';
import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  public async getCategories() {
    return await this.prisma.category.findMany({});
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
      const checkCategory = await this.prisma.category.findUnique({
        where: { slug: slug },
      });
      if (checkCategory) {
        throw new ConflictException(
          `Category with name '${name}' already exists`,
        );
      }
      return await this.prisma.category.create({
        data: {
          name,
          slug,
        },
      });
    } catch (error) {
      if (error.status) {
        throw error;
      }
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
