import { Field, InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
  @Field(() => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Array<ProfileScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  username?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  bio?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter;
}
