import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryCountAggregateInput {
  @Field(() => Boolean, {
    nullable: true,
  })
  id?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  name?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  slug?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  createdAt?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  updatedAt?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  _all?: true;
}
