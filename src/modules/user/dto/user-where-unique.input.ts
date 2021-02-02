import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, Matches } from 'class-validator';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @Matches(/^[a-zA-Z0-9_-]{2,20}$/)
  username?: string;
}
