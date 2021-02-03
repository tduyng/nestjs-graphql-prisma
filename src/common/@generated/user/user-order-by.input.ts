import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  email?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  password?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  username?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  role?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;
}
