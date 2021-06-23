import { Field, InputType } from '@nestjs/graphql';
import { ProfileCreateOrConnectWithoutuserInput } from './profile-create-or-connect-withoutuser.input';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedCreateNestedOneWithoutUserInput {
  @Field(() => ProfileCreateWithoutUserInput, {
    nullable: true
  })
  create?: ProfileCreateWithoutUserInput;

  @Field(() => ProfileCreateOrConnectWithoutuserInput, {
    nullable: true
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutuserInput;

  @Field(() => ProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfileWhereUniqueInput;
}
