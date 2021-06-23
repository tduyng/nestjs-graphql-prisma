import { Field, InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileCreateOneWithoutUserInput } from '../profile/profile-create-one-without-user.input';

@InputType()
export class UserCreateWithoutPostsInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: false
  })
  email!: string;

  @Field(() => String, {
    nullable: false
  })
  password!: string;

  @Field(() => Role, {
    nullable: true
  })
  role?: Role;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | string;

  @Field(() => String, {
    nullable: true
  })
  currentHashedRefreshToken?: string;

  @Field(() => ProfileCreateOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileCreateOneWithoutUserInput;
}
