import { CreateCategoryInput } from '@modules/category/dto/create-category.input';
import { Field, InputType } from '@nestjs/graphql';
import { ArrayUnique, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  content: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => [CreateCategoryInput], { nullable: true })
  @ArrayUnique()
  @IsOptional()
  categories?: CreateCategoryInput[];
}
