import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ProfileMaxAggregateInput } from './profile-max-aggregate.input';
import { ProfileMinAggregateInput } from './profile-min-aggregate.input';
import { ProfileOrderByInput } from './profile-order-by.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileWhereInput } from './profile-where.input';

@ArgsType()
export class AggregateProfileArgs {
  @Field(() => ProfileWhereInput, {
    nullable: true
  })
  where?: ProfileWhereInput;

  @Field(() => [ProfileOrderByInput], {
    nullable: true
  })
  orderBy?: Array<ProfileOrderByInput>;

  @Field(() => ProfileWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProfileWhereUniqueInput;

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

  @Field(() => ProfileMinAggregateInput, {
    nullable: true
  })
  min?: ProfileMinAggregateInput;

  @Field(() => ProfileMaxAggregateInput, {
    nullable: true
  })
  max?: ProfileMaxAggregateInput;
}
