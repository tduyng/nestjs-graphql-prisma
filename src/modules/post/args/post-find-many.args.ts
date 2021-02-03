import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PostFindManyArgs {
  @Field(() => PostWhereInput, {
    nullable: true,
  })
  where?: PostWhereInput;

  @Field(() => [PostOrderByInput], {
    nullable: true,
  })
  orderBy?: Array<PostOrderByInput>;

  @Field(() => PostWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PostWhereUniqueInput;

  @Field(() => Int, {
    nullable: true,
  })
  take?: number;

  @Field(() => Int, {
    nullable: true,
  })
  skip?: number;

  @Field(() => [PostScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<PostScalarFieldEnum>;
}
