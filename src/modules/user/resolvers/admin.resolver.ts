import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import {
  FindFirstUserArgs,
  FindManyUserArgs,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from '@common/@generated/user';
import { Roles } from '../decorators';
import { UseGuards } from '@nestjs/common';
import { GqlGuard } from '@modules/auth/guards/gql.guard';
import { CreateUserInput } from '../dto/create-user.input';
import { BatchPayload } from '@common/@generated/prisma';
import { UserService } from '../services/user.service';
import { UpdateUserInput } from '../dto';

@Resolver(() => User)
@UseGuards(GqlGuard)
@Roles('ADMIN')
export class AdminResolver {
  constructor(private userService: UserService) {}

  /* Query for single user*/
  @Query(() => User)
  public async adminFindUniqueUser(@Args('where') where: UserWhereUniqueInput) {
    return await this.userService.getUserByUniqueInput(where);
  }

  @Query(() => User)
  public async adminFindFirstUser(@Args() args: FindFirstUserArgs) {
    return await this.userService.getFirstUser(args);
  }

  @Query(() => [User])
  public async adminFindManyUser(@Args() args: FindManyUserArgs) {
    return await this.userService.getManyUsers(args);
  }

  @Query(() => Int)
  public async adminCountManyUsers(@Args() args: FindManyUserArgs) {
    return await this.userService.countManyUsers(args);
  }

  /* Mutations */

  @Mutation(() => User)
  public async adminCreateOneUser(@Args('data') data: CreateUserInput) {
    return await this.userService.createOneUser(data);
  }

  @Mutation(() => User)
  public async adminUpsertOneUser(@Args('data') data: CreateUserInput) {
    return await this.userService.upsertOneUser(data);
  }

  @Mutation(() => User)
  public async adminUpdateOneUser(
    @Args('where') where: UserWhereUniqueInput,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return await this.userService.updateOneUser(where, newUserData);
  }

  @Mutation(() => BatchPayload)
  public async adminUpdateManyUser(
    @Args('where') where: UserWhereInput,
    @Args('data') data: UserUpdateInput,
  ) {
    return await this.userService.updateManyUsers(where, data);
  }

  // adminDeleteOneUser
  @Mutation(() => User)
  public async adminDeleteOneUser(@Args('where') where: UserWhereUniqueInput) {
    return await this.userService.deleteOneUser(where);
  }
  @Mutation(() => BatchPayload)
  public async adminDeleteManyUser(@Args('where') where: UserWhereInput) {
    return await this.userService.deleteManyUsers(where);
  }
}
