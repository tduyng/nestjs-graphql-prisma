import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {
            nullable: true,
        })
    id?: number;

    @Field(() => Int, {
            nullable: true,
        })
    email?: number;

    @Field(() => Int, {
            nullable: true,
        })
    password?: number;

    @Field(() => Int, {
            nullable: true,
        })
    role?: number;

    @Field(() => Int, {
            nullable: true,
        })
    createdAt?: number;

    @Field(() => Int, {
            nullable: true,
        })
    updatedAt?: number;

    @Field(() => Int, {
            nullable: false,
        })
    _all!: number;
}
