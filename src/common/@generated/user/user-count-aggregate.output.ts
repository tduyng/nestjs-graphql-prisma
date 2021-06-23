import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  id!: number;

  @Field(() => Int, {
    nullable: false
  })
  email!: number;

  @Field(() => Int, {
    nullable: false
  })
  password!: number;

  @Field(() => Int, {
    nullable: false
  })
  role!: number;

  @Field(() => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  currentHashedRefreshToken!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
