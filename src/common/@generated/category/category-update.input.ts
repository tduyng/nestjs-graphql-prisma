import { Field, InputType } from '@nestjs/graphql';
import { PostUpdateManyWithoutCategoriesInput } from '../post/post-update-many-without-categories.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => String, {
            nullable: true,
        })
    id?: string;

    @Field(() => String, {
            nullable: true,
        })
    name?: string;

    @Field(() => String, {
            nullable: true,
        })
    slug?: string;

    @Field(() => Date, {
            nullable: true,
        })
    createdAt?: Date | string;

    @Field(() => Date, {
            nullable: true,
        })
    updatedAt?: Date | string;

    @Field(() => PostUpdateManyWithoutCategoriesInput, {
            nullable: true,
        })
    posts?: PostUpdateManyWithoutCategoriesInput;
}
