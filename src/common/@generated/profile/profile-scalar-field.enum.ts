import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
  id = 'id',
  firstName = 'firstName',
  lastName = 'lastName',
  bio = 'bio',
  userId = 'userId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum' });
