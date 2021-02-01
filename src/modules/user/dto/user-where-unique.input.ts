import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  username?: string;
}
