import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateOrConnectWithoutPostsInput {
  @Field(() => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @Field(() => CategoryCreateWithoutPostsInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutPostsInput;
}
