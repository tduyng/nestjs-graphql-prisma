import { Response } from 'express';
import { Role } from '@common/@generated/prisma';

export interface IHttpContext {
  req?: IRequestWithUser;
  res?: Response;
}

export interface IRequestWithUser {
  user?: IUserFromRequest;
  res?: Response;
  session: any;
}

export interface IUserFromRequest {
  id: string;
  email: string;
  role: Role;
}

export interface ISessionToken {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
  refreshTokenExpiresAt: number;
}
