import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { UserService } from '../services/user.service';
import { Post } from '@modules/post/post.model';
import { UpdateUserInput } from '../dto/update-user.input';
import { ChangePasswordInput } from '../dto/change-password.input';
import { GqlUser } from '../decorators';
import { UseGuards } from '@nestjs/common';
import { GqlGuard } from '@modules/auth/guards/gql.guard';
import { UserWhereUniqueInput } from '@common/@generated/user';

@Resolver(() => User)
@UseGuards(GqlGuard)
export class UserResolver {
  constructor(private userService: UserService) {}

  /**
   * Query for self profile.
   */
  @Query(() => User)
  public async me(@GqlUser() user: User) {
    return user;
  }

  @ResolveField(() => [Post])
  public async posts(@Parent() author: User) {
    return await this.userService.getPostsOfUser(author.id);
  }

  @ResolveField(() => [Post])
  public async profile(@Parent() author: User) {
    return await this.userService.getProfileOfUser(author.id);
  }

  /* Mutations */

  @Mutation(() => User)
  public async updateAccount(
    @GqlUser() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    const where: UserWhereUniqueInput = {
      id: user.id,
    };
    return this.userService.updateOneUser(where, newUserData);
  }

  @Mutation(() => User)
  public async deleteAccount(@GqlUser() user: User) {
    const where: UserWhereUniqueInput = {
      id: user.id,
    };
    return this.userService.deleteOneUser(where);
  }

  @Mutation(() => User)
  public async changePassword(
    @GqlUser() user: User,
    @Args('data') input: ChangePasswordInput,
  ) {
    return this.userService.changePassword(user.id, user.password, input);
  }
}
