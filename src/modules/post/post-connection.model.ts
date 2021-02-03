import { Paginated } from '@common/abstract-model/pagination';
import { ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
export class PostConnection extends Paginated(Post) {}
