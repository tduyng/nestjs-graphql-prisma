import { Field, InputType } from '@nestjs/graphql';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CategoryWhereInput {
  @Field(() => [CategoryWhereInput], {
    nullable: true
  })
  AND?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], {
    nullable: true
  })
  OR?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], {
    nullable: true
  })
  NOT?: Array<CategoryWhereInput>;

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

  @Field(() => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter;
}
