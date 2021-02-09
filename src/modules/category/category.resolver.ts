import {
  CategoryWhereUniqueInput,
  FindManyCategoryArgs,
} from '@common/@generated/category';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { CreateCategoryInput, UpdateCategoryInput } from './dto';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  /* Query */
  /* istanbul ignore next */
  @Query(() => [Category])
  public async categories(
    @Args() args: FindManyCategoryArgs,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return await this.categoryService.getCategories(args, info);
  }

  /* istanbul ignore next */
  @Query(() => Category)
  public async category(
    @Args('where') where: CategoryWhereUniqueInput,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return await this.categoryService.getCategoryByUniqueInput(where, info);
  }

  /* istanbul ignore next */
  /* Mutations */
  @Mutation(() => Category)
  public async createCategory(@Args('data') data: CreateCategoryInput) {
    return await this.categoryService.createCategory(data);
  }

  /* istanbul ignore next */
  @Mutation(() => [Category])
  public async createCategories(
    @Args({ name: 'data', type: () => [CreateCategoryInput] })
    data: CreateCategoryInput[],
  ) {
    return await this.categoryService.createCategories(data);
  }

  /* istanbul ignore next */
  @Mutation(() => Category)
  public async updateCategory(
    @Args('where') where: CategoryWhereUniqueInput,
    @Args('data') data: UpdateCategoryInput,
  ) {
    return await this.categoryService.updateCategory(where, data);
  }

  /* istanbul ignore next */
  @Mutation(() => Category)
  public async deleteCategory(@Args('where') where: CategoryWhereUniqueInput) {
    return await this.categoryService.deleteCategory(where);
  }

  /**
   * No need Resolved field when we use Prisma select
   * Note: When we use resolved field--> We have always problems with N+1 graphql
   * Note: uuid not work with Prisma select --> so need to use cuid
   */
  // @ResolveField(() => [Post])
  // public async posts_noneed(@Parent() category: Category) {
  //   return await this.categoryService.getPostsOfCategory(category.id);
  // }
}
