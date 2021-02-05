import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';

@ObjectType()
export class AggregateCategory {

    @Field(() => CategoryCountAggregate, {
            nullable: true,
        })
    count?: CategoryCountAggregate;

    @Field(() => CategoryMinAggregate, {
            nullable: true,
        })
    min?: CategoryMinAggregate;

    @Field(() => CategoryMaxAggregate, {
            nullable: true,
        })
    max?: CategoryMaxAggregate;
}
