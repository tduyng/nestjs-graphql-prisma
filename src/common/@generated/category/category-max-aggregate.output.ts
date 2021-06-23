import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoryMaxAggregate {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: true
  })
  name?: string;

  @Field(() => String, {
    nullable: true
  })
  slug?: string;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | string;
}
