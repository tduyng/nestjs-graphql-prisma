import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileCountAggregate {

    @Field(() => Int, {
            nullable: true,
        })
    id?: number;

    @Field(() => Int, {
            nullable: true,
        })
    username?: number;

    @Field(() => Int, {
            nullable: true,
        })
    firstName?: number;

    @Field(() => Int, {
            nullable: true,
        })
    lastName?: number;

    @Field(() => Int, {
            nullable: true,
        })
    bio?: number;

    @Field(() => Int, {
            nullable: true,
        })
    createdAt?: number;

    @Field(() => Int, {
            nullable: true,
        })
    updatedAt?: number;

    @Field(() => Int, {
            nullable: true,
        })
    userId?: number;

    @Field(() => Int, {
            nullable: false,
        })
    _all!: number;
}
