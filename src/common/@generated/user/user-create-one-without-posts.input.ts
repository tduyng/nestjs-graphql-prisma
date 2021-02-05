import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutpostsInput } from './user-create-or-connect-withoutposts.input';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOneWithoutPostsInput {

    @Field(() => UserCreateWithoutPostsInput, {
            nullable: true,
        })
    create?: UserCreateWithoutPostsInput;

    @Field(() => UserWhereUniqueInput, {
            nullable: true,
        })
    connect?: UserWhereUniqueInput;

    @Field(() => UserCreateOrConnectWithoutpostsInput, {
            nullable: true,
        })
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput;
}
