import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutPostsInput } from '../user/user-update-one-without-posts.input';

@InputType()
export class PostUpdateWithoutCategoriesInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: true,
  })
  title?: string;

  @Field(() => String, {
    nullable: true,
  })
  slug?: string;

  @Field(() => String, {
    nullable: true,
  })
  content?: string;

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

  @Field(() => UserUpdateOneWithoutPostsInput, {
    nullable: true,
  })
  author?: UserUpdateOneWithoutPostsInput;
}
