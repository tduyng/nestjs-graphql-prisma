import { ProfileUpdateOneWithoutUserInput } from '@common/@generated/profile';
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => ProfileUpdateOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileUpdateOneWithoutUserInput;
}
