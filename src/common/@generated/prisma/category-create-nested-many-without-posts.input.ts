import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateOrConnectWithoutpostsInput } from '../category/category-create-or-connect-withoutposts.input';
import { CategoryCreateWithoutPostsInput } from '../category/category-create-without-posts.input';
import { CategoryWhereUniqueInput } from '../category/category-where-unique.input';

@InputType()
export class CategoryCreateNestedManyWithoutPostsInput {
  @Field(() => [CategoryCreateWithoutPostsInput], {
    nullable: true,
  })
  create?: Array<CategoryCreateWithoutPostsInput>;

  @Field(() => [CategoryCreateOrConnectWithoutpostsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutpostsInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  connect?: Array<CategoryWhereUniqueInput>;
}
