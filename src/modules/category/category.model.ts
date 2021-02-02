import { BaseModel } from '@common/types/base.model';
import { Post } from '@modules/post/post.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category extends BaseModel {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  slug: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
