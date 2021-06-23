import { Field, InputType } from '@nestjs/graphql';
import { PostCreateManyAuthorEnvelopeInput } from './post-create-many-author-envelope.input';
import { PostCreateOrConnectWithoutAuthorInput } from './post-create-or-connect-without-author.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateManyWithoutAuthorInput {
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: Array<PostCreateWithoutAuthorInput>;

  @Field(() => [PostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;

  @Field(() => PostCreateManyAuthorEnvelopeInput, {
    nullable: true
  })
  createMany?: PostCreateManyAuthorEnvelopeInput;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: Array<PostWhereUniqueInput>;
}
