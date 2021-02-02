import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput {
  @Field(() => String)
  name: string;
}
