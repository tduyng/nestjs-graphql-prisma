import { Field, InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutPostsInput {
  @Field(() => CategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryWhereUniqueInput;

  @Field(() => CategoryUpdateWithoutPostsInput, {
    nullable: false,
  })
  data!: CategoryUpdateWithoutPostsInput;
}
