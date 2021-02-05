import { ArgsType, Field } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';

@ArgsType()
export class FindUniquePostArgs {
  @Field(() => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;
}
