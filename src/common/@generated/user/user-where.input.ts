import { Field, InputType } from '@nestjs/graphql';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileWhereInput } from '../profile/profile-where.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], {
    nullable: true
  })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], {
    nullable: true
  })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], {
    nullable: true
  })
  NOT?: Array<UserWhereInput>;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  email?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true
  })
  password?: StringFilter;

  @Field(() => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter;

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

  @Field(() => ProfileWhereInput, {
    nullable: true
  })
  profile?: ProfileWhereInput;

  @Field(() => StringFilter, {
    nullable: true
  })
  currentHashedRefreshToken?: StringFilter;
}
