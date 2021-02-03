import { Post } from '@modules/post/post.model';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { CategoryWhereUniqueInput } from './dto/category-where-unique.input';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  /* Query */
  @Query(() => [Category])
  public async categories() {
    return await this.categoryService.getCategories();
  }

  @Query(() => Category)
  public async category(@Args('where') where: CategoryWhereUniqueInput) {
    return await this.categoryService.getCategoryByUniqueInput(where);
  }

  @ResolveField(() => [Post])
  public async posts(@Parent() category: Category) {
    return await this.categoryService.getPostsOfCategory(category.id);
  }

  /* Mutations */
  @Mutation(() => Category)
  public async createCategory(@Args('data') data: CreateCategoryInput) {
    return await this.categoryService.createCategory(data);
  }

  @Mutation(() => [Category])
  public async createCategories(@Args('data') data: CreateCategoryInput[]) {
    return await this.categoryService.createCategories(data);
  }

  @Mutation(() => Category)
  public async updateCategory(
    @Args('where') where: CategoryWhereUniqueInput,
    @Args('data') data: UpdateCategoryInput,
  ) {
    return await this.categoryService.updateCategory(where, data);
  }

  @Mutation(() => Category)
  public async deleteCategory(@Args('where') where: CategoryWhereUniqueInput) {
    return await this.categoryService.deleteCategory(where);
  }
}
