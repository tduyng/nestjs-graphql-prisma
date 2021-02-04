import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { UserService } from './services/user.service';
import { Post } from '@modules/post/post.model';
import { UpdateUserInput } from './dto/update-user.input';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { GqlUser, Roles } from './decorators';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '@modules/auth/guards/jwt.guard';
import { RolesGuard } from '@modules/auth/guards/roles.guard';

@Resolver(() => User)
@UseGuards(JwtGuard, RolesGuard)
@Roles('ADMIN')
export class AdminResolver {
  constructor(private userService: UserService) {}

  /**
   * Query for self profile.
   */

  /* Query for single user*/
  @Query(() => User)
  public async adminGetOneUser(@Args('where') where: UserWhereUniqueInput) {
    return await this.userService.getUserByUniqueInput(where);
  }
  // adminFindUniqueUser
  // adminFindFirstUser
  // adminFindManyUser
  // adminFindManyUserCount

  // adminCreateOneUser
  // adminUpsertOneUser

  /* Mutations */

  @Mutation(() => User)
  public async adminUpdateOneUser(
    @GqlUser() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return this.userService.updateOneUser(user.id, newUserData);
  }

  // adminUpdateManyUser

  // adminDeleteOneUser
  // adminDeleteManyUser

  /* Relation field */
  @ResolveField(() => [Post])
  public async posts(@Parent() author: User) {
    return await this.userService.getPostsOfUser(author.id);
  }

  @ResolveField(() => [Post])
  public async profile(@Parent() author: User) {
    return await this.userService.getProfileOfUser(author.id);
  }
}
