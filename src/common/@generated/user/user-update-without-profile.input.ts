import { Field, InputType } from '@nestjs/graphql';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserUpdateWithoutProfileInput {
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

  @Field(() => PostUpdateManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutAuthorInput;
}
