import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, Matches } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @Matches(/^[a-zA-Z0-9_-]{2,20}$/)
  username?: string;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;
}
