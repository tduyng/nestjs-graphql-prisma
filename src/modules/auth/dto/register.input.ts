import { ProfileCreateOneWithoutUserInput } from '@common/@generated/profile';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Validate } from 'class-validator';
import { UserExitsValidator } from '@modules/user/decorators';

@InputType()
export class RegisterInput {
  @Field(() => String, {
    nullable: false,
  })
  @Validate(UserExitsValidator)
  @IsEmail()
  email!: string;

  @Field(() => String, {
    nullable: false,
  })
  password!: string;

  @Field(() => ProfileCreateOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileCreateOneWithoutUserInput;
}
