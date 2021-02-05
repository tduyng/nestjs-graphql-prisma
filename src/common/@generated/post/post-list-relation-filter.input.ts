import { Field, InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostListRelationFilter {
  @Field(() => PostWhereInput, {
    nullable: true,
  })
  every?: PostWhereInput;

  @Field(() => PostWhereInput, {
    nullable: true,
  })
  some?: PostWhereInput;

  @Field(() => PostWhereInput, {
    nullable: true,
  })
  none?: PostWhereInput;
}
