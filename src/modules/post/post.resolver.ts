import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from './post.model';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { User } from '@modules/user/user.model';
import {
  FindManyPostArgs,
  PostWhereUniqueInput,
} from '@common/@generated/post';
import { CurrentUser } from '@modules/user/decorators';
import { UseGuards } from '@nestjs/common';
import { GqlGuard } from '@modules/auth/guards/gql.guard';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  /* Query */
  @Query(() => [Post])
  public async posts(
    @Args() args: FindManyPostArgs,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return await this.postService.getPosts(args, info);
  }
  @Query(() => Post)
  public async post(
    @Args('where') args: PostWhereUniqueInput,
    @Info() info?: GraphQLResolveInfo,
  ) {
    return await this.postService.getPost(args, info);
  }

  /* Mutations */
  @Mutation(() => Post)
  @UseGuards(GqlGuard)
  public async createPost(
    @Args('data') input: CreatePostInput,
    @CurrentUser() user: User,
  ) {
    return await this.postService.createPost(input, user);
  }

  @Mutation(() => Post)
  @UseGuards(GqlGuard)
  public async updatePost(
    @Args('where') where: PostWhereUniqueInput,
    @Args('data') data: UpdatePostInput,
  ) {
    return await this.postService.updatePost(where, data);
  }

  @Mutation(() => Post)
  @UseGuards(GqlGuard)
  public async deletePost(@Args('where') where: PostWhereUniqueInput) {
    return await this.postService.deletePost(where);
  }

  /**
   * We don't need provide ResolvedField when use Prisma select
   */
  // @ResolveField(() => User)
  // public async author(@Parent() post: Post) {
  //   const where: Prisma.PostWhereUniqueInput = {
  //     id: post.id,
  //   };
  //   return await this.postService.getAuthorOfPost(where);
  // }
}
