import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProfileOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  username?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  firstName?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  lastName?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  bio?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  userId?: SortOrder;
}
