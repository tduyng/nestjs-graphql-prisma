import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutcategoriesInput } from '../post/post-create-or-connect-withoutcategories.input';
import { PostCreateWithoutCategoriesInput } from '../post/post-create-without-categories.input';
import { PostWhereUniqueInput } from '../post/post-where-unique.input';

@InputType()
export class PostCreateNestedManyWithoutCategoriesInput {
  @Field(() => [PostCreateWithoutCategoriesInput], {
    nullable: true,
  })
  create?: Array<PostCreateWithoutCategoriesInput>;

  @Field(() => [PostCreateOrConnectWithoutcategoriesInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutcategoriesInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: Array<PostWhereUniqueInput>;
}
