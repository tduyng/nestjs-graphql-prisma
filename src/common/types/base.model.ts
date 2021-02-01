import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  public id: string;

  @Field({
    description: 'Identifies the date and time when the object was created',
  })
  createdAt: Date;

  @Field({
    description: 'Identifies the date and time when the object was las updated',
  })
  updatedAt: Date;
}
