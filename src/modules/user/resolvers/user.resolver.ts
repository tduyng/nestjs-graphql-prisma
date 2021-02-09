import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { UserService } from '../services/user.service';
import { UpdateUserInput } from '../dto/update-user.input';
import { ChangePasswordInput } from '../dto/change-password.input';
import { CurrentUser } from '../decorators';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { GraphQLResolveInfo } from 'graphql';
// import { UseGuards } from '@nestjs/common';
// import { GqlGuard } from '@modules/auth/guards/gql.guard';

@Resolver(() => User)
// @UseGuards(GqlGuard)
export class UserResolver {
  constructor(private userService: UserService) {}

  /**
   * Query for self profile.
   */
  @Query(() => User)
  public async me(
    @CurrentUser() user: User,
    @Info() info?: GraphQLResolveInfo,
  ) {
    const where: UserWhereUniqueInput = {
      id: user.id,
    };
    return await this.userService.getUserByUniqueInput(where, info);
  }

  /* Mutations */

  @Mutation(() => User)
  public async updateAccount(
    @CurrentUser() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    const where: UserWhereUniqueInput = {
      id: user.id,
    };
    return this.userService.updateOneUser(where, newUserData);
  }

  @Mutation(() => User)
  public async deleteAccount(@CurrentUser() user: User) {
    const where: UserWhereUniqueInput = {
      id: user.id,
    };
    return this.userService.deleteOneUser(where);
  }

  @Mutation(() => User)
  public async changePassword(
    @CurrentUser() user: User,
    @Args('data') input: ChangePasswordInput,
  ) {
    return this.userService.changePassword(user.id, user.password, input);
  }

  /**
   * We don't need Resolved field when we use Prisma select already
   * Prisma select to solve n+1 graphql problem
   */
  // @ResolveField(() => [Post])
  // public async posts(@Parent() author: User) {
  //   return await this.userService.getPostsOfUser(author.id);
  // }

  // @ResolveField(() => [Post])
  // public async profile(@Parent() author: User) {
  //   return await this.userService.getProfileOfUser(author.id);
  // }
}
