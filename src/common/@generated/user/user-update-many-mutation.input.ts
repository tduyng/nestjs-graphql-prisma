import { Field, InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: true
  })
  email?: string;

  @Field(() => String, {
    nullable: true
  })
  password?: string;

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
}
