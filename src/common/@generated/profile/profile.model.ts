import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Profile {
  @Field(() => ID, {
    nullable: false,
  })
  id!: string;

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

  @Field(() => String, {
    nullable: true,
  })
  readonly userId?: string;

  @Field(() => Date, {
    nullable: false,
  })
  createdAt!: Date | string;

  @Field(() => Date, {
    nullable: false,
  })
  updatedAt!: Date | string;

  @Field(() => User, {
    nullable: true,
  })
  user?: User;
}
