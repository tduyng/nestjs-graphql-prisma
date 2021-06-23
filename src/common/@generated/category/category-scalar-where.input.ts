import { Field, InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CategoryScalarWhereInput {
  @Field(() => [CategoryScalarWhereInput], {
    nullable: true
  })
  AND?: Array<CategoryScalarWhereInput>;

  @Field(() => [CategoryScalarWhereInput], {
    nullable: true
  })
  OR?: Array<CategoryScalarWhereInput>;

  @Field(() => [CategoryScalarWhereInput], {
    nullable: true
  })
  NOT?: Array<CategoryScalarWhereInput>;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  name?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  slug?: StringFilter;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter;
}
