import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  password = 'password',
  role = 'role',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt'
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' });
