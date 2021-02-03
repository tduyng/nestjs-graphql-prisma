import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, {
    nullable: true,
  })
  id?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  email?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  password?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  username?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  role?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  createdAt?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  updatedAt?: true;
}
