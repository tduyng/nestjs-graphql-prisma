import { BaseModel } from '@common/types/base.model';
import { Post } from '@modules/post/post.model';
import { Profile } from '@modules/profile/profile.model';
import {
  ObjectType,
  Field,
  HideField,
  registerEnumType,
} from '@nestjs/graphql';

import { Role } from './user.types';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});
@ObjectType()
export class User extends BaseModel {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => Role, { defaultValue: Role.USER })
  role: Role;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => Profile, { nullable: false })
  profile: Profile;

  @HideField()
  password: string;
}
