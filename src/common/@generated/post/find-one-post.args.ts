import { ArgsType, Field } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';

@ArgsType()
export class FindOnePostArgs {
  @Field(() => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;
}
