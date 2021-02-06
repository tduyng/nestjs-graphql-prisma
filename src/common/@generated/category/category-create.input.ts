import { Field, InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutCategoriesInput } from '../prisma/post-create-nested-many-without-categories.input';

@InputType()
export class CategoryCreateInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: false,
  })
  name!: string;

  @Field(() => String, {
    nullable: false,
  })
  slug!: string;

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | string;

  @Field(() => PostCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutCategoriesInput;
}
