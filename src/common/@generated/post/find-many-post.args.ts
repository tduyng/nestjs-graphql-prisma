import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PostOrderByInput } from './post-order-by.input';
import { PostScalarFieldEnum } from './post-scalar-field.enum';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostWhereInput } from './post-where.input';

@ArgsType()
export class FindManyPostArgs {

    @Field(() => PostWhereInput, {
            nullable: true,
        })
    where?: PostWhereInput;

    @Field(() => [PostOrderByInput], {
            nullable: true,
        })
    orderBy?: Array<PostOrderByInput>;

    @Field(() => PostWhereUniqueInput, {
            nullable: true,
        })
    cursor?: PostWhereUniqueInput;

    @Field(() => Int, {
            nullable: true,
        })
    take?: number;

    @Field(() => Int, {
            nullable: true,
        })
    skip?: number;

    @Field(() => [PostScalarFieldEnum], {
            nullable: true,
        })
    distinct?: Array<PostScalarFieldEnum>;
}
