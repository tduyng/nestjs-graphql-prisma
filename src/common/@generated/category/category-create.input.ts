import { Field, InputType } from '@nestjs/graphql';
import { PostCreateManyWithoutCategoriesInput } from '../post/post-create-many-without-categories.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {
            nullable: true,
        })
    id?: string;

    @Field(() => String, {
            nullable: false,
        })
    name!: string;

    @Field(() => String, {
            nullable: false,
        })
    slug!: string;

    @Field(() => Date, {
            nullable: true,
        })
    createdAt?: Date | string;

    @Field(() => Date, {
            nullable: true,
        })
    updatedAt?: Date | string;

    @Field(() => PostCreateManyWithoutCategoriesInput, {
            nullable: true,
        })
    posts?: PostCreateManyWithoutCategoriesInput;
}
