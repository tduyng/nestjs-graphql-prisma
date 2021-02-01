import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class UserInput {
  @Field((type) => ID)
  id: number;

  @Field()
  @IsEmail()
  email: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  // @Field((type) => [Post], { nullable: true })
  // posts?: [Post] | null;
}
