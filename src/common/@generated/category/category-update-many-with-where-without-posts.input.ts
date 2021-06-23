import { Field, InputType } from '@nestjs/graphql';
import { CategoryScalarWhereInput } from './category-scalar-where.input';
import { CategoryUpdateManyMutationInput } from './category-update-many-mutation.input';

@InputType()
export class CategoryUpdateManyWithWhereWithoutPostsInput {
  @Field(() => CategoryScalarWhereInput, {
    nullable: false
  })
  where!: CategoryScalarWhereInput;

  @Field(() => CategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoryUpdateManyMutationInput;
}
