import { ProfileCreateOneWithoutUserInput } from '@common/@generated/profile';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength, Validate } from 'class-validator';
import { UserExitsValidator } from '@modules/user/decorators';

@InputType()
export class RegisterUserInput {
  @Field(() => String, {
    nullable: false,
  })
  @Validate(UserExitsValidator)
  @IsEmail()
  email!: string;

  @Field(() => String, {
    nullable: false,
  })
  @IsString()
  @MinLength(3)
  password!: string;

  @Field(() => ProfileCreateOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileCreateOneWithoutUserInput;
}
