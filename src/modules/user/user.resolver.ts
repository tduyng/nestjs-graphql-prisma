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
import { CurrentUser } from './user.decorator';
import { Post } from '@modules/post/post.model';
import { UserWhereUniqueInput } from './dto/user-where-unique.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ChangePasswordInput } from './dto/change-password.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  /**
   * Query for self profile.
   */
  @Query(() => User)
  public async me(@CurrentUser() user: User) {
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

  /* Mutations */

  @Mutation(() => User)
  public async updateUser(
    @CurrentUser() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return this.userService.updateUser(user.id, newUserData);
  }

  @Mutation(() => User)
  public async changePassword(
    @CurrentUser() user: User,
    @Args('data') input: ChangePasswordInput,
  ) {
    return this.userService.changePassword(user.id, user.password, input);
  }
}
