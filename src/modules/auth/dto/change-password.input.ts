import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @Field()
  token: string;

  @Field()
  @MinLength(3)
  @IsString()
  oldPassword: string;

  @Field()
  @MinLength(3)
  @IsString()
  newPassword: string;
}
