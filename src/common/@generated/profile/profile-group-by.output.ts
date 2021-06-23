import { Field, ObjectType } from '@nestjs/graphql';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';

@ObjectType()
export class ProfileGroupBy {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => String, {
    nullable: false
  })
  username!: string;

  @Field(() => String, {
    nullable: true
  })
  firstName?: string;

  @Field(() => String, {
    nullable: true
  })
  lastName?: string;

  @Field(() => String, {
    nullable: true
  })
  bio?: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date | string;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date | string;

  @Field(() => String, {
    nullable: true
  })
  userId?: string;

  @Field(() => ProfileCountAggregate, {
    nullable: true
  })
  count?: ProfileCountAggregate;

  @Field(() => ProfileMinAggregate, {
    nullable: true
  })
  min?: ProfileMinAggregate;

  @Field(() => ProfileMaxAggregate, {
    nullable: true
  })
  max?: ProfileMaxAggregate;
}
