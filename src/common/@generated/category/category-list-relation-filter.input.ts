import { Field, InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryListRelationFilter {
  @Field(() => CategoryWhereInput, {
    nullable: true,
  })
  every?: CategoryWhereInput;

  @Field(() => CategoryWhereInput, {
    nullable: true,
  })
  some?: CategoryWhereInput;

  @Field(() => CategoryWhereInput, {
    nullable: true,
  })
  none?: CategoryWhereInput;
}
