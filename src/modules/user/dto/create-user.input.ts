import { ProfileCreateOneWithoutUserInput } from '@common/@generated/profile';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, {
    nullable: false
  })
  email!: string;

  @Field(() => String, {
    nullable: false
  })
  password!: string;

  @Field(() => ProfileCreateOneWithoutUserInput, {
    nullable: true
  })
  profile?: ProfileCreateOneWithoutUserInput;
}
