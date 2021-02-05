import { BaseModel } from '@common/abstract-model/base.model';
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
@ObjectType('user')
export class User extends BaseModel {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { defaultValue: Role.USER })
  role: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => Profile, { nullable: true })
  profile?: Profile;

  @HideField()
  password: string;
}
