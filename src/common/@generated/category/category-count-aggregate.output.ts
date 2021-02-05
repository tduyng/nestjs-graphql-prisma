import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoryCountAggregate {

    @Field(() => Int, {
            nullable: true,
        })
    id?: number;

    @Field(() => Int, {
            nullable: true,
        })
    name?: number;

    @Field(() => Int, {
            nullable: true,
        })
    slug?: number;

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
