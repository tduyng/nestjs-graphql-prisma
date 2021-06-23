import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ProfileCountAggregateInput } from './profile-count-aggregate.input';
import { ProfileMaxAggregateInput } from './profile-max-aggregate.input';
import { ProfileMinAggregateInput } from './profile-min-aggregate.input';
import { ProfileOrderByInput } from './profile-order-by.input';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';
import { ProfileScalarWhereWithAggregatesInput } from './profile-scalar-where-with-aggregates.input';
import { ProfileWhereInput } from './profile-where.input';

@ArgsType()
export class GroupByProfileArgs {
  @Field(() => ProfileWhereInput, {
    nullable: true
  })
  where?: ProfileWhereInput;

  @Field(() => [ProfileOrderByInput], {
    nullable: true
  })
  orderBy?: Array<ProfileOrderByInput>;

  @Field(() => [ProfileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<ProfileScalarFieldEnum>;

  @Field(() => ProfileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProfileScalarWhereWithAggregatesInput;

  @Field(() => Int, {
    nullable: true
  })
  take?: number;

  @Field(() => Int, {
    nullable: true
  })
  skip?: number;

  @Field(() => ProfileCountAggregateInput, {
    nullable: true
  })
  count?: ProfileCountAggregateInput;

  @Field(() => ProfileMinAggregateInput, {
    nullable: true
  })
  min?: ProfileMinAggregateInput;

  @Field(() => ProfileMaxAggregateInput, {
    nullable: true
  })
  max?: ProfileMaxAggregateInput;
}
