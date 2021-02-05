import { Field, ObjectType } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';

@ObjectType()
export class AggregatePost {

    @Field(() => PostCountAggregate, {
            nullable: true,
        })
    count?: PostCountAggregate;

    @Field(() => PostMinAggregate, {
            nullable: true,
        })
    min?: PostMinAggregate;

    @Field(() => PostMaxAggregate, {
            nullable: true,
        })
    max?: PostMaxAggregate;
}
