import { Field, InputType } from '@nestjs/graphql';
import { ProfileCreateOrConnectWithoutuserInput } from './profile-create-or-connect-withoutuser.input';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input';
import { ProfileUpsertWithoutUserInput } from './profile-upsert-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedUpdateOneWithoutUserInput {

    @Field(() => ProfileCreateWithoutUserInput, {
            nullable: true,
        })
    create?: ProfileCreateWithoutUserInput;

    @Field(() => ProfileWhereUniqueInput, {
            nullable: true,
        })
    connect?: ProfileWhereUniqueInput;

    @Field(() => Boolean, {
            nullable: true,
        })
    disconnect?: boolean;

    @Field(() => Boolean, {
            nullable: true,
        })
    delete?: boolean;

    @Field(() => ProfileUpdateWithoutUserInput, {
            nullable: true,
        })
    update?: ProfileUpdateWithoutUserInput;

    @Field(() => ProfileUpsertWithoutUserInput, {
            nullable: true,
        })
    upsert?: ProfileUpsertWithoutUserInput;

    @Field(() => ProfileCreateOrConnectWithoutuserInput, {
            nullable: true,
        })
    connectOrCreate?: ProfileCreateOrConnectWithoutuserInput;
}
