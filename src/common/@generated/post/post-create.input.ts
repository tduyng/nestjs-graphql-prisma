import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutPostsInput } from '../prisma/category-create-nested-many-without-posts.input';
import { UserCreateNestedOneWithoutPostsInput } from '../prisma/user-create-nested-one-without-posts.input';

@InputType()
export class PostCreateInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: false,
  })
  title!: string;

  @Field(() => String, {
    nullable: false,
  })
  slug!: string;

  @Field(() => String, {
    nullable: false,
  })
  content!: string;

  @Field(() => Boolean, {
    nullable: true,
  })
  published?: boolean;

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutPostsInput, {
    nullable: true,
  })
  author?: UserCreateNestedOneWithoutPostsInput;

  @Field(() => CategoryCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  categories?: CategoryCreateNestedManyWithoutPostsInput;
}
