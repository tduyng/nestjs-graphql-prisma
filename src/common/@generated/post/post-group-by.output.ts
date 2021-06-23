import { Field, ObjectType } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';

@ObjectType()
export class PostGroupBy {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => String, {
    nullable: false
  })
  title!: string;

  @Field(() => String, {
    nullable: false
  })
  slug!: string;

  @Field(() => String, {
    nullable: false
  })
  content!: string;

  @Field(() => Boolean, {
    nullable: false
  })
  published!: boolean;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date | string;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date | string;

  @Field(() => String, {
    nullable: true
  })
  authorId?: string;

  @Field(() => PostCountAggregate, {
    nullable: true
  })
  count?: PostCountAggregate;

  @Field(() => PostMinAggregate, {
    nullable: true
  })
  min?: PostMinAggregate;

  @Field(() => PostMaxAggregate, {
    nullable: true
  })
  max?: PostMaxAggregate;
}
