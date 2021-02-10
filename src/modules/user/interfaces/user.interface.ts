import { Response } from 'express';
import { Role } from '@common/@generated/prisma';
export interface IRequestWithUser {
  user?: IUserFromRequest;
  res?: Response;
}
export interface IUserFromRequest {
  id: string;
  email: string;
  username?: string;
  role: Role;
}
