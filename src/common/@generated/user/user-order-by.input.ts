import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByInput } from '../profile/profile-order-by.input';

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
  role?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @Field(() => ProfileOrderByInput, {
    nullable: true,
  })
  profile?: ProfileOrderByInput;

  @Field(() => SortOrder, {
    nullable: true,
  })
  currentHashedRefreshToken?: SortOrder;
}
