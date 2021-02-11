import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import {
  FindFirstUserArgs,
  FindManyUserArgs,
  UserCreateInput,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from '@common/@generated/user';
import { Roles } from '../decorators';
import { BatchPayload } from '@common/@generated/prisma';
import { UserService } from '../services/user.service';
import { GraphQLResolveInfo } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '@modules/auth/guards';

@Resolver(() => User)
@UseGuards(JwtGuard)
@Roles('ADMIN')
export class AdminResolver {
  constructor(private userService: UserService) {}

  /* Query for single user*/
  @Query(() => User)
  public async adminFindUniqueUser(
    @Args('where') where: UserWhereUniqueInput,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return await this.userService.getUserByUniqueInput(where, info);
  }

  @Query(() => User)
  public async adminFindFirstUser(
    @Args() args: FindFirstUserArgs,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return await this.userService.getFirstUser(args, info);
  }

  @Query(() => [User])
  public async adminFindManyUser(
    @Args() args: FindManyUserArgs,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return await this.userService.getManyUsers(args, info);
  }

  @Query(() => Int)
  public async adminCountManyUsers(@Args() args: FindManyUserArgs) {
    return await this.userService.countManyUsers(args);
  }

  /* Mutations */

  @Mutation(() => User)
  public async adminCreateOneUser(@Args('data') data: UserCreateInput) {
    return await this.userService.createOneUser(data);
  }

  @Mutation(() => User)
  public async adminUpsertOneUser(@Args('data') data: UserCreateInput) {
    return await this.userService.upsertOneUser(data);
  }

  @Mutation(() => User)
  public async adminUpdateOneUser(
    @Args('where') where: UserWhereUniqueInput,
    @Args('data') newUserData: UserUpdateInput,
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
