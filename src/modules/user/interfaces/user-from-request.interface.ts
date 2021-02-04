import { Role } from '@prisma/client';

export interface IUserFromRequest {
  id: string;
  email: string;
  username?: string;
  role: Role;
}
