import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    username = "username",
    firstName = "firstName",
    lastName = "lastName",
    bio = "bio",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}

registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum' })
