import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';

@ObjectType()
export class User {
  @Field(() => ID, {
    nullable: false,
  })
  id!: string;

  @Field(() => String, {
    nullable: false,
  })
  email!: string;

  @Field(() => String, {
    nullable: false,
  })
  password!: string;

  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @Field(() => Role, {
    nullable: false,
    defaultValue: 'USER',
  })
  role!: Role;

  @Field(() => Date, {
    nullable: false,
  })
  createdAt!: Date | string;

  @Field(() => Date, {
    nullable: false,
  })
  updatedAt!: Date | string;

  @Field(() => [Post], {
    nullable: true,
  })
  posts?: Array<Post>;

  @Field(() => Profile, {
    nullable: true,
  })
  profile?: Profile;
}
