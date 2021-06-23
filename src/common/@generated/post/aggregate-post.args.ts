import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PostMaxAggregateInput } from './post-max-aggregate.input';
import { PostMinAggregateInput } from './post-min-aggregate.input';
import { PostOrderByInput } from './post-order-by.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostWhereInput } from './post-where.input';

@ArgsType()
export class AggregatePostArgs {
  @Field(() => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput;

  @Field(() => [PostOrderByInput], {
    nullable: true
  })
  orderBy?: Array<PostOrderByInput>;

  @Field(() => PostWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostWhereUniqueInput;

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

  @Field(() => PostMinAggregateInput, {
    nullable: true
  })
  min?: PostMinAggregateInput;

  @Field(() => PostMaxAggregateInput, {
    nullable: true
  })
  max?: PostMaxAggregateInput;
}
