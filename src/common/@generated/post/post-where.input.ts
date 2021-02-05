import { Field, InputType } from '@nestjs/graphql';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserWhereInput } from '../user/user-where.input';

@InputType()
export class PostWhereInput {

    @Field(() => [PostWhereInput], {
            nullable: true,
        })
    AND?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {
            nullable: true,
        })
    OR?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {
            nullable: true,
        })
    NOT?: Array<PostWhereInput>;

    @Field(() => StringFilter, {
            nullable: true,
        })
    id?: StringFilter;

    @Field(() => StringFilter, {
            nullable: true,
        })
    title?: StringFilter;

    @Field(() => StringFilter, {
            nullable: true,
        })
    slug?: StringFilter;

    @Field(() => StringFilter, {
            nullable: true,
        })
    content?: StringFilter;

    @Field(() => BoolFilter, {
            nullable: true,
        })
    published?: BoolFilter;

    @Field(() => DateTimeFilter, {
            nullable: true,
        })
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {
            nullable: true,
        })
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {
            nullable: true,
        })
    authorId?: StringFilter;

    @Field(() => UserWhereInput, {
            nullable: true,
        })
    author?: UserWhereInput;

    @Field(() => CategoryListRelationFilter, {
            nullable: true,
        })
    categories?: CategoryListRelationFilter;
}
