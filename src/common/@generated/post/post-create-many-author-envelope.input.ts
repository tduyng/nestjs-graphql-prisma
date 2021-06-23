import { Field, InputType } from '@nestjs/graphql';
import { PostCreateManyAuthorInput } from './post-create-many-author.input';

@InputType()
export class PostCreateManyAuthorEnvelopeInput {
  @Field(() => [PostCreateManyAuthorInput], {
    nullable: false
  })
  data!: Array<PostCreateManyAuthorInput>;

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean;
}
