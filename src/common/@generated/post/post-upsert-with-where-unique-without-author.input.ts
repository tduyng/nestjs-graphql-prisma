import { Field, InputType } from '@nestjs/graphql';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostUpdateWithoutAuthorInput } from './post-update-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(() => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @Field(() => PostUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: PostUpdateWithoutAuthorInput;

  @Field(() => PostCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PostCreateWithoutAuthorInput;
}
