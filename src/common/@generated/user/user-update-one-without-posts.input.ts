import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutpostsInput } from './user-create-or-connect-withoutposts.input';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';
import { UserUpsertWithoutPostsInput } from './user-upsert-without-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneWithoutPostsInput {
  @Field(() => UserCreateWithoutPostsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutPostsInput;

  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput;

  @Field(() => Boolean, {
    nullable: true,
  })
  disconnect?: boolean;

  @Field(() => Boolean, {
    nullable: true,
  })
  delete?: boolean;

  @Field(() => UserUpdateWithoutPostsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutPostsInput;

  @Field(() => UserUpsertWithoutPostsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutPostsInput;

  @Field(() => UserCreateOrConnectWithoutpostsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutpostsInput;
}
