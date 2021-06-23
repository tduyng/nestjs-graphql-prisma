import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  id!: number;

  @Field(() => Int, {
    nullable: false
  })
  title!: number;

  @Field(() => Int, {
    nullable: false
  })
  slug!: number;

  @Field(() => Int, {
    nullable: false
  })
  content!: number;

  @Field(() => Int, {
    nullable: false
  })
  published!: number;

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
  authorId!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
