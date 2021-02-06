import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from '../post/post.model';

@ObjectType()
export class Category {
  @Field(() => ID, {
    nullable: false,
  })
  id!: string;

  @Field(() => String, {
    nullable: false,
  })
  name!: string;

  @Field(() => String, {
    nullable: false,
  })
  slug!: string;

  @Field(() => Date, {
    nullable: false,
  })
  createdAt!: Date | string;

  @Field(() => Date, {
    nullable: false,
  })
  updatedAt!: Date | string;

  @Field(() => [Post], {
    nullable: false,
  })
  posts!: Array<Post>;
}
