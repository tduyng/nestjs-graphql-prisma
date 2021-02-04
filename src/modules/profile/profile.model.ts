import { BaseModel } from '@common/abstract-model/base.model';
import { User } from '@modules/user/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('profile')
export class Profile extends BaseModel {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}
