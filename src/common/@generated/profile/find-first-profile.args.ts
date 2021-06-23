import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ProfileOrderByInput } from './profile-order-by.input';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileWhereInput } from './profile-where.input';

@ArgsType()
export class FindFirstProfileArgs {
  @Field(() => ProfileWhereInput, {
    nullable: true
  })
  where?: ProfileWhereInput;

  @Field(() => [ProfileOrderByInput], {
    nullable: true
  })
  orderBy?: Array<ProfileOrderByInput>;

  @Field(() => ProfileWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProfileWhereUniqueInput;

  @Field(() => Int, {
    nullable: true
  })
  take?: number;

  @Field(() => Int, {
    nullable: true
  })
  skip?: number;

  @Field(() => [ProfileScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<ProfileScalarFieldEnum>;
}
