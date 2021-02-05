import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CategoryOrderByInput } from './category-order-by.input';
import { CategoryScalarFieldEnum } from './category-scalar-field.enum';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryWhereInput } from './category-where.input';

@ArgsType()
export class FindFirstCategoryArgs {
  @Field(() => CategoryWhereInput, {
    nullable: true,
  })
  where?: CategoryWhereInput;

  @Field(() => [CategoryOrderByInput], {
    nullable: true,
  })
  orderBy?: Array<CategoryOrderByInput>;

  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CategoryWhereUniqueInput;

  @Field(() => Int, {
    nullable: true,
  })
  take?: number;

  @Field(() => Int, {
    nullable: true,
  })
  skip?: number;

  @Field(() => [CategoryScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<CategoryScalarFieldEnum>;
}
