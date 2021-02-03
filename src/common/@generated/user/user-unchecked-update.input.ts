import { Field, InputType } from '@nestjs/graphql';
import { PostUncheckedUpdateManyWithoutAuthorInput } from '../post/post-unchecked-update-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { ProfileUncheckedUpdateOneWithoutUserInput } from '../profile/profile-unchecked-update-one-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @Field(() => String, {
    nullable: true,
  })
  username?: string;

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

  @Field(() => PostUncheckedUpdateManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostUncheckedUpdateManyWithoutAuthorInput;

  @Field(() => ProfileUncheckedUpdateOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileUncheckedUpdateOneWithoutUserInput;
}
