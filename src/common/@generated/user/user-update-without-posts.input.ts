import { Field, InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileUpdateOneWithoutUserInput } from '../profile/profile-update-one-without-user.input';

@InputType()
export class UserUpdateWithoutPostsInput {

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

    @Field(() => ProfileUpdateOneWithoutUserInput, {
            nullable: true,
        })
    profile?: ProfileUpdateOneWithoutUserInput;
}
