import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  oldPassword: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  newPassword: string;
}
