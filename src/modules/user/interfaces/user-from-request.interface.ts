import { Role } from '@common/@generated/prisma';

export interface IUserFromRequest {
  id: string;
  email: string;
  username?: string;
  role: Role;
}
