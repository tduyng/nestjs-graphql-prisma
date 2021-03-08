import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class ResetPasswordInput {
  @Field()
  token: string;

  @Field()
  @MinLength(3)
  @IsString()
  newPassword: string;
}
