import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutprofileInput } from '../user/user-create-or-connect-withoutprofile.input';
import { UserCreateWithoutProfileInput } from '../user/user-create-without-profile.input';
import { UserWhereUniqueInput } from '../user/user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProfileInput {
  @Field(() => UserCreateWithoutProfileInput, {
    nullable: true
  })
  create?: UserCreateWithoutProfileInput;

  @Field(() => UserCreateOrConnectWithoutprofileInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutprofileInput;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput;
}
