import { Field, InputType } from '@nestjs/graphql';
import { BooleanFilter } from './boolean-filter.input';

@InputType()
export class BoolFilter {
  @Field(() => Boolean, {
    nullable: true,
  })
  equals?: boolean;

  @Field(() => BooleanFilter, {
    nullable: true,
  })
  not?: BooleanFilter;
}
