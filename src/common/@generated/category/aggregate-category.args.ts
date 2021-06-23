import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CategoryMaxAggregateInput } from './category-max-aggregate.input';
import { CategoryMinAggregateInput } from './category-min-aggregate.input';
import { CategoryOrderByInput } from './category-order-by.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryWhereInput } from './category-where.input';

@ArgsType()
export class AggregateCategoryArgs {
  @Field(() => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput;

  @Field(() => [CategoryOrderByInput], {
    nullable: true
  })
  orderBy?: Array<CategoryOrderByInput>;

  @Field(() => CategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoryWhereUniqueInput;

  @Field(() => Int, {
    nullable: true
  })
  take?: number;

  @Field(() => Int, {
    nullable: true
  })
  skip?: number;

  @Field(() => Boolean, {
    nullable: true
  })
  count?: true;

  @Field(() => CategoryMinAggregateInput, {
    nullable: true
  })
  min?: CategoryMinAggregateInput;

  @Field(() => CategoryMaxAggregateInput, {
    nullable: true
  })
  max?: CategoryMaxAggregateInput;
}
