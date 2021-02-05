import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileCountAggregateInput {

    @Field(() => Boolean, {
            nullable: true,
        })
    id?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    username?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    firstName?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    lastName?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    bio?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    createdAt?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    updatedAt?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    userId?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    _all?: true;
}
