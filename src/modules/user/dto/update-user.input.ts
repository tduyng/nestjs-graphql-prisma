import { ProfileUpdateOneWithoutUserInput } from '@common/@generated/profile';
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @MinLength(3)
  password?: string;

  @Field(() => ProfileUpdateOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileUpdateOneWithoutUserInput;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  currentHashedRefreshToken?: string;
}
