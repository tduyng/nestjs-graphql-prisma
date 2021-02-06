import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutauthorInput } from '../post/post-create-or-connect-withoutauthor.input';
import { PostCreateWithoutAuthorInput } from '../post/post-create-without-author.input';
import { PostWhereUniqueInput } from '../post/post-where-unique.input';

@InputType()
export class PostCreateNestedManyWithoutAuthorInput {
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: Array<PostCreateWithoutAuthorInput>;

  @Field(() => [PostCreateOrConnectWithoutauthorInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutauthorInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: Array<PostWhereUniqueInput>;
}
