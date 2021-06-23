import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';

@ObjectType()
export class CategoryGroupBy {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => String, {
    nullable: false
  })
  name!: string;

  @Field(() => String, {
    nullable: false
  })
  slug!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date | string;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date | string;

  @Field(() => CategoryCountAggregate, {
    nullable: true
  })
  count?: CategoryCountAggregate;

  @Field(() => CategoryMinAggregate, {
    nullable: true
  })
  min?: CategoryMinAggregate;

  @Field(() => CategoryMaxAggregate, {
    nullable: true
  })
  max?: CategoryMaxAggregate;
}
