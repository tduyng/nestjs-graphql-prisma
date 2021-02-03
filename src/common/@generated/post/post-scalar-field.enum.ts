import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
  id = 'id',
  title = 'title',
  slug = 'slug',
  content = 'content',
  published = 'published',
  authorId = 'authorId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum' });
