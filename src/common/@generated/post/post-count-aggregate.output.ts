import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostCountAggregate {
  @Field(() => Int, {
    nullable: true,
  })
  id?: number;

  @Field(() => Int, {
    nullable: true,
  })
  title?: number;

  @Field(() => Int, {
    nullable: true,
  })
  slug?: number;

  @Field(() => Int, {
    nullable: true,
  })
  content?: number;

  @Field(() => Int, {
    nullable: true,
  })
  published?: number;

  @Field(() => Int, {
    nullable: true,
  })
  createdAt?: number;

  @Field(() => Int, {
    nullable: true,
  })
  updatedAt?: number;

  @Field(() => Int, {
    nullable: true,
  })
  authorId?: number;

  @Field(() => Int, {
    nullable: false,
  })
  _all!: number;
}
