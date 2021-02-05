import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateOrConnectWithoutpostsInput } from './category-create-or-connect-withoutposts.input';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateManyWithoutPostsInput {

    @Field(() => [CategoryCreateWithoutPostsInput], {
            nullable: true,
        })
    create?: Array<CategoryCreateWithoutPostsInput>;

    @Field(() => [CategoryWhereUniqueInput], {
            nullable: true,
        })
    connect?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryCreateOrConnectWithoutpostsInput], {
            nullable: true,
        })
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutpostsInput>;
}
