import { Field, InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
  @Field(() => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Array<CategoryScalarWhereWithAggregatesInput>;

  @Field(() => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Array<CategoryScalarWhereWithAggregatesInput>;

  @Field(() => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Array<CategoryScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  slug?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter;
}
