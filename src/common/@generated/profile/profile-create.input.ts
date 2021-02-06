import { Field, InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../prisma/user-create-nested-one-without-profile.input';

@InputType()
export class ProfileCreateInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: false,
  })
  username!: string;

  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @Field(() => String, {
    nullable: true,
  })
  bio?: string;

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutProfileInput, {
    nullable: true,
  })
  user?: UserCreateNestedOneWithoutProfileInput;
}
