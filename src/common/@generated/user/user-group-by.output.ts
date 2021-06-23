import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';

@ObjectType()
export class UserGroupBy {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => String, {
    nullable: false
  })
  email!: string;

  @Field(() => String, {
    nullable: false
  })
  password!: string;

  @Field(() => Role, {
    nullable: false
  })
  role!: Role;

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
  currentHashedRefreshToken?: string;

  @Field(() => UserCountAggregate, {
    nullable: true
  })
  count?: UserCountAggregate;

  @Field(() => UserMinAggregate, {
    nullable: true
  })
  min?: UserMinAggregate;

  @Field(() => UserMaxAggregate, {
    nullable: true
  })
  max?: UserMaxAggregate;
}
