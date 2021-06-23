import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CategoryCountAggregateInput } from './category-count-aggregate.input';
import { CategoryMaxAggregateInput } from './category-max-aggregate.input';
import { CategoryMinAggregateInput } from './category-min-aggregate.input';
import { CategoryOrderByInput } from './category-order-by.input';
import { CategoryScalarFieldEnum } from './category-scalar-field.enum';
import { CategoryScalarWhereWithAggregatesInput } from './category-scalar-where-with-aggregates.input';
import { CategoryWhereInput } from './category-where.input';

@ArgsType()
export class GroupByCategoryArgs {
  @Field(() => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput;

  @Field(() => [CategoryOrderByInput], {
    nullable: true
  })
  orderBy?: Array<CategoryOrderByInput>;

  @Field(() => [CategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<CategoryScalarFieldEnum>;

  @Field(() => CategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoryScalarWhereWithAggregatesInput;

  @Field(() => Int, {
    nullable: true
  })
  take?: number;

  @Field(() => Int, {
    nullable: true
  })
  skip?: number;

  @Field(() => CategoryCountAggregateInput, {
    nullable: true
  })
  count?: CategoryCountAggregateInput;

  @Field(() => CategoryMinAggregateInput, {
    nullable: true
  })
  min?: CategoryMinAggregateInput;

  @Field(() => CategoryMaxAggregateInput, {
    nullable: true
  })
  max?: CategoryMaxAggregateInput;
}
