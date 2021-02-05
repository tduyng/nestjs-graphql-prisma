import { Role } from '@common/@generated/prisma/role.enum';
import { ProfileCreateOneWithoutUserInput } from '@common/@generated/profile';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, {
    nullable: false,
  })
  email!: string;

  @Field(() => String, {
    nullable: false,
  })
  password!: string;

  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @Field(() => Role, {
    nullable: true,
  })
  role?: Role;

  @Field(() => ProfileCreateOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileCreateOneWithoutUserInput;
}
