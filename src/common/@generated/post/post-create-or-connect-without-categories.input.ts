import { Field, InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateOrConnectWithoutCategoriesInput {
  @Field(() => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(() => PostCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: PostCreateWithoutCategoriesInput;
}
