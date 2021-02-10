import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class RequestForgotPasswordInput {
  @Field()
  @IsEmail()
  email: string;
}
