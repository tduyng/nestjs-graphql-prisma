import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateManyWithoutPostsInput {
  @Field(() => [CategoryCreateWithoutPostsInput], {
    nullable: true
  })
  create?: Array<CategoryCreateWithoutPostsInput>;

  @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Array<CategoryWhereUniqueInput>;
}
