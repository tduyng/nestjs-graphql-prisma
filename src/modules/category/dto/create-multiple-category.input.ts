import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateCategoryInput } from './create-category.input';

@InputType()
export class CreateMultipleCategoryInput {
  @Field(() => [CreateCategoryInput])
  @IsNotEmpty()
  categories: CreateCategoryInput[];
}
