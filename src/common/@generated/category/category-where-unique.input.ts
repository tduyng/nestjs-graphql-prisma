import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: true
  })
  slug?: string;
}
