import { Field, ObjectType } from '@nestjs/graphql';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';

@ObjectType()
export class AggregateProfile {

    @Field(() => ProfileCountAggregate, {
            nullable: true,
        })
    count?: ProfileCountAggregate;

    @Field(() => ProfileMinAggregate, {
            nullable: true,
        })
    min?: ProfileMinAggregate;

    @Field(() => ProfileMaxAggregate, {
            nullable: true,
        })
    max?: ProfileMaxAggregate;
}
