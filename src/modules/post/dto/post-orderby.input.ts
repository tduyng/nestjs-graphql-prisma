import { OrderBy } from '@common/abstract-model/order-by';
import { InputType, registerEnumType } from '@nestjs/graphql';

export enum PostOrderField {
  id = 'id',
  title = 'title',
  content = 'content',
  slug = 'slug',
  published = 'published',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PostOrderField, {
  name: 'PostOrderField',
  description: 'Properties by which post connections can be ordered',
});

@InputType()
export class PostOrderByInput extends OrderBy {
  field: PostOrderField;
}
