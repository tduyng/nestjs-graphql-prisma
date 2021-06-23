import { Field, InputType } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PostScalarWhereWithAggregatesInput {
  @Field(() => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Array<PostScalarWhereWithAggregatesInput>;

  @Field(() => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Array<PostScalarWhereWithAggregatesInput>;

  @Field(() => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Array<PostScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  slug?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, {
    nullable: true
  })
  published?: BoolWithAggregatesFilter;

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
  authorId?: StringWithAggregatesFilter;
}
