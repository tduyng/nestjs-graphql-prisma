import { Role } from '@common/@generated/prisma';
import { Request, Response } from 'express';

export interface IHttpContext {
  req?: IRequestWithUser;
  res?: Response;
}

export interface IRequestWithUser extends Request {
  user?: IUserFromRequest;
  res?: Response;
  session?: any;
}

export interface IUserFromRequest {
  id: string;
  email: string;
  role: Role;
}

export interface ISessionAuthToken {
  accessToken: string;
  refreshToken: string;
}

export interface IPayloadUserJwt {
  userId: string;
  email?: string;
}
