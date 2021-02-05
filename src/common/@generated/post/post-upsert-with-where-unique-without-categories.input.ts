import { Field, InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => PostWhereUniqueInput, {
            nullable: false,
        })
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutCategoriesInput, {
            nullable: false,
        })
    update!: PostUpdateWithoutCategoriesInput;

    @Field(() => PostCreateWithoutCategoriesInput, {
            nullable: false,
        })
    create!: PostCreateWithoutCategoriesInput;
}
