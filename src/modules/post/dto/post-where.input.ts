import { StringFilter } from '@common/prisma-input/string-filter.input';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostWhereInput {
  @Field(() => [PostWhereInput], {
    nullable: true,
  })
  AND?: Array<PostWhereInput>;

  @Field(() => [PostWhereInput], {
    nullable: true,
  })
  OR?: Array<PostWhereInput>;

  @Field(() => [PostWhereInput], {
    nullable: true,
  })
  NOT?: Array<PostWhereInput>;

  @Field(() => StringFilter, {
    nullable: true,
  })
  articleId?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  body?: StringFilter;

  @Field(() => TagListRelationFilter, {
    nullable: true,
  })
  tags?: TagListRelationFilter;

  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @Field(() => IntFilter, {
    nullable: true,
  })
  favoritesCount?: IntFilter;

  @Field(() => UserWhereInput, {
    nullable: true,
  })
  author?: UserWhereInput;

  @Field(() => StringFilter, {
    nullable: true,
  })
  authorId?: StringFilter;

  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  favoritedBy?: UserListRelationFilter;

  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;
}
