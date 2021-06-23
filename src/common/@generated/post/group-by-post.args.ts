import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PostCountAggregateInput } from './post-count-aggregate.input';
import { PostMaxAggregateInput } from './post-max-aggregate.input';
import { PostMinAggregateInput } from './post-min-aggregate.input';
import { PostOrderByInput } from './post-order-by.input';
import { PostScalarFieldEnum } from './post-scalar-field.enum';
import { PostScalarWhereWithAggregatesInput } from './post-scalar-where-with-aggregates.input';
import { PostWhereInput } from './post-where.input';

@ArgsType()
export class GroupByPostArgs {
  @Field(() => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput;

  @Field(() => [PostOrderByInput], {
    nullable: true
  })
  orderBy?: Array<PostOrderByInput>;

  @Field(() => [PostScalarFieldEnum], {
    nullable: false
  })
  by!: Array<PostScalarFieldEnum>;

  @Field(() => PostScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostScalarWhereWithAggregatesInput;

  @Field(() => Int, {
    nullable: true
  })
  take?: number;

  @Field(() => Int, {
    nullable: true
  })
  skip?: number;

  @Field(() => PostCountAggregateInput, {
    nullable: true
  })
  count?: PostCountAggregateInput;

  @Field(() => PostMinAggregateInput, {
    nullable: true
  })
  min?: PostMinAggregateInput;

  @Field(() => PostMaxAggregateInput, {
    nullable: true
  })
  max?: PostMaxAggregateInput;
}
