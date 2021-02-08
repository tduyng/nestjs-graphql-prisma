import { PostWhereUniqueInput } from '@common/@generated/post';
import { IRequestWithUser } from '@modules/user/interfaces/request-with-user.interface';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PostService } from '../services/post.service';

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(private readonly postService: PostService) {}
  public async canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    const req = gqlContext.getContext().req as IRequestWithUser;

    const where: PostWhereUniqueInput | undefined = context.getArgByIndex(1)
      ?.where;
    if (!(req.user && where)) {
      return false;
    }

    const article = await this.postService.getPost(where);
    return Boolean(article && article.authorId == req.user.id);
  }
}
