import { Field, InputType } from '@nestjs/graphql';
import { PostCreateManyAuthorEnvelopeInput } from './post-create-many-author-envelope.input';
import { PostCreateOrConnectWithoutAuthorInput } from './post-create-or-connect-without-author.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { PostUpdateManyWithWhereWithoutAuthorInput } from './post-update-many-with-where-without-author.input';
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from './post-update-with-where-unique-without-author.input';
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from './post-upsert-with-where-unique-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUpdateManyWithoutAuthorInput {
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: Array<PostCreateWithoutAuthorInput>;

  @Field(() => [PostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;

  @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;

  @Field(() => PostCreateManyAuthorEnvelopeInput, {
    nullable: true
  })
  createMany?: PostCreateManyAuthorEnvelopeInput;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: Array<PostWhereUniqueInput>;

  @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;

  @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;

  @Field(() => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Array<PostScalarWhereInput>;
}
