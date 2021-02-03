import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { User } from '../user/user.model';

@ObjectType()
export class Post {
  @Field(() => ID, {
    nullable: false,
  })
  id!: string;

  @Field(() => String, {
    nullable: false,
  })
  title!: string;

  @Field(() => String, {
    nullable: false,
  })
  slug!: string;

  @Field(() => String, {
    nullable: false,
  })
  content!: string;

  @Field(() => Boolean, {
    nullable: false,
    defaultValue: true,
  })
  published!: boolean;

  @Field(() => String, {
    nullable: true,
  })
  readonly authorId?: string;

  @Field(() => Date, {
    nullable: false,
  })
  createdAt!: Date | string;

  @Field(() => Date, {
    nullable: false,
  })
  updatedAt!: Date | string;

  @Field(() => User, {
    nullable: true,
  })
  author?: User;

  @Field(() => [Category], {
    nullable: true,
  })
  categories?: Array<Category>;
}
