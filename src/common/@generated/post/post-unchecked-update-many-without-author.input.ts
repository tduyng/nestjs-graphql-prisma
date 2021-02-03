import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutauthorInput } from './post-create-or-connect-withoutauthor.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { PostUpdateManyWithWhereWithoutAuthorInput } from './post-update-many-with-where-without-author.input';
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from './post-update-with-where-unique-without-author.input';
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from './post-upsert-with-where-unique-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUncheckedUpdateManyWithoutAuthorInput {
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: Array<PostCreateWithoutAuthorInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  set?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: Array<PostWhereUniqueInput>;

  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
  })
  delete?: Array<PostWhereUniqueInput>;

  @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;

  @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;

  @Field(() => [PostScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: Array<PostScalarWhereInput>;

  @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;

  @Field(() => [PostCreateOrConnectWithoutauthorInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutauthorInput>;
}
