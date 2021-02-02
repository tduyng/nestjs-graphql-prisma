import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
