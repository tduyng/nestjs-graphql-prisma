import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  slug?: string;
}
