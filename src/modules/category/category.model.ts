import { BaseModel } from '@common/abstract-model/base.model';
import { Post } from '@modules/post/post.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType('category')
export class Category extends BaseModel {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  name: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  slug: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
