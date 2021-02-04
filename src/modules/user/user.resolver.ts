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
import { ChangePasswordInput } from './dto/change-password.input';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { GqlUser } from './decorators';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  /**
   * Query for self profile.
   */
  @Query(() => User)
  public async me(@GqlUser() user: User) {
    return user;
  }

  /* Query for single user*/
  @Query(() => User)
  public async user(@Args('where') where: UserWhereUniqueInput) {
    return await this.userService.getUserByUniqueInput(where);
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
  public async updateUser(
    @GqlUser() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return this.userService.updateUser(user.id, newUserData);
  }

  @Mutation(() => User)
  public async changePassword(
    @GqlUser() user: User,
    @Args('data') input: ChangePasswordInput,
  ) {
    return this.userService.changePassword(user.id, user.password, input);
  }
}
