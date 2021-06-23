import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOneWithoutProfileInput } from '../user/user-create-one-without-profile.input';

@InputType()
export class ProfileCreateInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: false
  })
  username!: string;

  @Field(() => String, {
    nullable: true
  })
  firstName?: string;

  @Field(() => String, {
    nullable: true
  })
  lastName?: string;

  @Field(() => String, {
    nullable: true
  })
  bio?: string;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | string;

  @Field(() => UserCreateOneWithoutProfileInput, {
    nullable: true
  })
  user?: UserCreateOneWithoutProfileInput;
}
