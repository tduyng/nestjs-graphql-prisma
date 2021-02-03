import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutprofileInput } from './user-create-or-connect-withoutprofile.input';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOneWithoutProfileInput {
  @Field(() => UserCreateWithoutProfileInput, {
    nullable: true,
  })
  create?: UserCreateWithoutProfileInput;

  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput;

  @Field(() => UserCreateOrConnectWithoutprofileInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutprofileInput;
}
