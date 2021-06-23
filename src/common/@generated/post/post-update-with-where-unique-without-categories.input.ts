import { Field, InputType } from '@nestjs/graphql';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoriesInput {
  @Field(() => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(() => PostUpdateWithoutCategoriesInput, {
    nullable: false
  })
  data!: PostUpdateWithoutCategoriesInput;
}
