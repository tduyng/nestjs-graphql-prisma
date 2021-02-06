import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutcategoriesInput } from './post-create-or-connect-withoutcategories.input';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { PostUpdateManyWithWhereWithoutCategoriesInput } from './post-update-many-with-where-without-categories.input';
import { PostUpdateWithWhereUniqueWithoutCategoriesInput } from './post-update-with-where-unique-without-categories.input';
import { PostUpsertWithWhereUniqueWithoutCategoriesInput } from './post-upsert-with-where-unique-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUpdateManyWithoutCategoriesInput {
  @Field(() => [PostCreateWithoutCategoriesInput], {
    nullable: true,
  })
  create?: Array<PostCreateWithoutCategoriesInput>;

  @Field(() => [PostCreateOrConnectWithoutcategoriesInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutcategoriesInput>;

  @Field(() => [PostUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true,
  })
  upsert?: Array<PostUpsertWithWhereUniqueWithoutCategoriesInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  set?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  delete?: Array<PostWhereUniqueInput>;

  @Field(() => [PostUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true,
  })
  update?: Array<PostUpdateWithWhereUniqueWithoutCategoriesInput>;

  @Field(() => [PostUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true,
  })
  updateMany?: Array<PostUpdateManyWithWhereWithoutCategoriesInput>;

  @Field(() => [PostScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: Array<PostScalarWhereInput>;
}
