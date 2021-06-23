import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryUncheckedUpdateManyInput {
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
