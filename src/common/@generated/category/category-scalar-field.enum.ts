import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
  id = 'id',
  name = 'name',
  slug = 'slug',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum' });
