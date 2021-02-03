import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { BaseModel } from '@common/abstract-model/base.model';
import { Category } from '@modules/category/category.model';

@ObjectType()
export class Post extends BaseModel {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  content: string;

  @Field(() => String, { nullable: false })
  slug: string;

  @Field(() => String, { defaultValue: true })
  published: boolean;

  @Field(() => User, { nullable: true })
  author?: User;

  @Field(() => [Category], { nullable: true })
  categories?: Category[];
}
