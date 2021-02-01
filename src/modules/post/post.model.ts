import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { BaseModel } from '@common/types/base.model';

@ObjectType()
export class Post extends BaseModel {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  content: string;

  @Field(() => String, { defaultValue: false })
  published: boolean;

  @Field(() => User, { nullable: true })
  author?: User;
}
