import { PrismaService } from '@modules/prisma/prisma.service';
import { Post } from '@modules/post/post.model';
import { CategoryWhereUniqueInput } from './dto/category-where-unique.input';
import { CreateCategoryInput } from './dto/create-category.input';
import slugify from 'slugify';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  public async getCategories() {
    return await this.prisma.category.findMany({});
  }

  public async createCategory(categoryInput: CreateCategoryInput) {
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

  public async updateCategory(
    where: CategoryWhereUniqueInput,
    categoryInput: UpdateCategoryInput,
  ) {
    return await this.prisma.category.update({
      where,
      data: categoryInput,
    });
  }

  public async deleteCategory(
    where: CategoryWhereUniqueInput,
  ): Promise<Category> {
    return await this.prisma.category.delete({ where });
  }
}
