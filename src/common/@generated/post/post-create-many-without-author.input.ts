import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutauthorInput } from './post-create-or-connect-withoutauthor.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateManyWithoutAuthorInput {
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: Array<PostCreateWithoutAuthorInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: Array<PostWhereUniqueInput>;

  @Field(() => [PostCreateOrConnectWithoutauthorInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutauthorInput>;
}
