import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => String, { nullable: true })
  take?: string;

  @Field(() => String, { nullable: true })
  before?: string;

  @Field(() => String, { nullable: true })
  first?: string;

  @Field(() => String, { nullable: true })
  last?: string;
}
