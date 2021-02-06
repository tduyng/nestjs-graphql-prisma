import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutPostsInput } from '../prisma/category-create-nested-many-without-posts.input';

@InputType()
export class PostCreateWithoutAuthorInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

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
    nullable: true,
  })
  published?: boolean;

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | string;

  @Field(() => CategoryCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  categories?: CategoryCreateNestedManyWithoutPostsInput;
}
