import { Field, InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';

@InputType()
export class UserUpsertWithoutPostsInput {

    @Field(() => UserUpdateWithoutPostsInput, {
            nullable: false,
        })
    update!: UserUpdateWithoutPostsInput;

    @Field(() => UserCreateWithoutPostsInput, {
            nullable: false,
        })
    create!: UserCreateWithoutPostsInput;
}
