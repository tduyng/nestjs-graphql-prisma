import { Field, InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserWhereInput } from '../user/user-where.input';

@InputType()
export class ProfileWhereInput {
  @Field(() => [ProfileWhereInput], {
    nullable: true,
  })
  AND?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], {
    nullable: true,
  })
  OR?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], {
    nullable: true,
  })
  NOT?: Array<ProfileWhereInput>;

  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  firstName?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  lastName?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  bio?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter;

  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @Field(() => UserWhereInput, {
    nullable: true,
  })
  user?: UserWhereInput;
}
