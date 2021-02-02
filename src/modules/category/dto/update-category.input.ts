import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;
}
