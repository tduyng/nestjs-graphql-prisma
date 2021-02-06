import { Field, InputType } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: false,
  })
  email!: string;

  @Field(() => String, {
    nullable: false,
  })
  password!: string;

  @Field(() => Role, {
    nullable: true,
  })
  role?: Role;

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | string;

  @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;

  @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
}
