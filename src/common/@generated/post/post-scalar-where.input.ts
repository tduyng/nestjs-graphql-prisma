import { Field, InputType } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PostScalarWhereInput {
  @Field(() => [PostScalarWhereInput], {
    nullable: true
  })
  AND?: Array<PostScalarWhereInput>;

  @Field(() => [PostScalarWhereInput], {
    nullable: true
  })
  OR?: Array<PostScalarWhereInput>;

  @Field(() => [PostScalarWhereInput], {
    nullable: true
  })
  NOT?: Array<PostScalarWhereInput>;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  title?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  slug?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  content?: StringFilter;

  @Field(() => BoolFilter, {
    nullable: true
  })
  published?: BoolFilter;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter;
}
