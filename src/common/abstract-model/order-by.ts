import { Field, InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

export enum OrderByDirection {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(OrderByDirection, {
  name: 'OrderByDirection',
  description: 'Sort list by asc or desc',
});

@InputType({ isAbstract: true })
export abstract class OrderBy {
  @Field(() => OrderByDirection)
  direction: OrderByDirection;
}
