import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutpostsInput } from '../user/user-create-or-connect-withoutposts.input';
import { UserCreateWithoutPostsInput } from '../user/user-create-without-posts.input';
import { UserWhereUniqueInput } from '../user/user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPostsInput {
  @Field(() => UserCreateWithoutPostsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutPostsInput;

  @Field(() => UserCreateOrConnectWithoutpostsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutpostsInput;

  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput;
}
