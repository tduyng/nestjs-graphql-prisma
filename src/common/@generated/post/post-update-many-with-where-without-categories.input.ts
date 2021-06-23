import { Field, InputType } from '@nestjs/graphql';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { PostUpdateManyMutationInput } from './post-update-many-mutation.input';

@InputType()
export class PostUpdateManyWithWhereWithoutCategoriesInput {
  @Field(() => PostScalarWhereInput, {
    nullable: false
  })
  where!: PostScalarWhereInput;

  @Field(() => PostUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostUpdateManyMutationInput;
}
