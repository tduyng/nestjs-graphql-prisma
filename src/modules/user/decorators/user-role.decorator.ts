import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

export const UserRole = (role: Role) => SetMetadata('role', role);
