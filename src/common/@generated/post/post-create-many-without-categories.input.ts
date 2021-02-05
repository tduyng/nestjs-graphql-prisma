import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutcategoriesInput } from './post-create-or-connect-withoutcategories.input';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateManyWithoutCategoriesInput {

    @Field(() => [PostCreateWithoutCategoriesInput], {
            nullable: true,
        })
    create?: Array<PostCreateWithoutCategoriesInput>;

    @Field(() => [PostWhereUniqueInput], {
            nullable: true,
        })
    connect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostCreateOrConnectWithoutcategoriesInput], {
            nullable: true,
        })
    connectOrCreate?: Array<PostCreateOrConnectWithoutcategoriesInput>;
}
