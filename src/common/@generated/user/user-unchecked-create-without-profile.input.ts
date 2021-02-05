import { Field, InputType } from '@nestjs/graphql';
import { PostUncheckedCreateManyWithoutAuthorInput } from '../post/post-unchecked-create-many-without-author.input';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserUncheckedCreateWithoutProfileInput {

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

    @Field(() => PostUncheckedCreateManyWithoutAuthorInput, {
            nullable: true,
        })
    posts?: PostUncheckedCreateManyWithoutAuthorInput;
}
