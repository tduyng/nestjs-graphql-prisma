import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutauthorInput } from './post-create-or-connect-withoutauthor.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUncheckedCreateNestedManyWithoutAuthorInput {
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
