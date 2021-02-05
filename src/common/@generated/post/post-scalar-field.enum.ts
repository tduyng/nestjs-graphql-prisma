import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
  id = 'id',
  title = 'title',
  slug = 'slug',
  content = 'content',
  published = 'published',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  authorId = 'authorId',
}

registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum' });
