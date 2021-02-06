import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateOrConnectWithoutpostsInput } from './category-create-or-connect-withoutposts.input';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';
import { CategoryUpdateManyWithWhereWithoutPostsInput } from './category-update-many-with-where-without-posts.input';
import { CategoryUpdateWithWhereUniqueWithoutPostsInput } from './category-update-with-where-unique-without-posts.input';
import { CategoryUpsertWithWhereUniqueWithoutPostsInput } from './category-upsert-with-where-unique-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUpdateManyWithoutPostsInput {
  @Field(() => [CategoryCreateWithoutPostsInput], {
    nullable: true,
  })
  create?: Array<CategoryCreateWithoutPostsInput>;

  @Field(() => [CategoryCreateOrConnectWithoutpostsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutpostsInput>;

  @Field(() => [CategoryUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true,
  })
  upsert?: Array<CategoryUpsertWithWhereUniqueWithoutPostsInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  connect?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  set?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  delete?: Array<CategoryWhereUniqueInput>;

  @Field(() => [CategoryUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true,
  })
  update?: Array<CategoryUpdateWithWhereUniqueWithoutPostsInput>;

  @Field(() => [CategoryUpdateManyWithWhereWithoutPostsInput], {
    nullable: true,
  })
  updateMany?: Array<CategoryUpdateManyWithWhereWithoutPostsInput>;

  @Field(() => [CategoryScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: Array<CategoryScalarWhereInput>;
}
