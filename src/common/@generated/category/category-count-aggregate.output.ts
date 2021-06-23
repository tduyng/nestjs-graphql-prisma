import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoryCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  id!: number;

  @Field(() => Int, {
    nullable: false
  })
  name!: number;

  @Field(() => Int, {
    nullable: false
  })
  slug!: number;

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
  _all!: number;
}
