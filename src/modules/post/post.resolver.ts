import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from './post.model';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { User } from '@modules/user/user.model';
import { Prisma } from '@prisma/client';
import {
  FindManyPostArgs,
  PostWhereUniqueInput,
} from '@common/@generated/post';
import { GqlUser } from '@modules/user/decorators';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  /* Query */
  @Query(() => Post)
  public async posts(@Args() args: FindManyPostArgs) {
    return await this.postService.getPosts(args);
  }
  @Query(() => Post)
  public async post(@Args('where') where: PostWhereUniqueInput) {
    return await this.postService.getPost(where);
  }

  @ResolveField(() => User)
  public async user(@Parent() post: Post) {
    const where: Prisma.PostWhereUniqueInput = {
      id: post.id,
    };
    return await this.postService.getUserOfPost(where);
  }

  /* Mutations */
  @Mutation(() => Post)
  public async createPost(
    @Args('data') input: CreatePostInput,
    @GqlUser() user: User,
  ) {
    return await this.postService.createPost(input, user);
  }

  @Mutation(() => Post)
  public async updatePost(
    @Args('where') where: PostWhereUniqueInput,
    @Args('data') data: UpdatePostInput,
  ) {
    return await this.postService.updatePost(where, data);
  }

  @Mutation(() => Post)
  public async deletePost(@Args('where') where: PostWhereUniqueInput) {
    return await this.postService.deletePost(where);
  }
}
