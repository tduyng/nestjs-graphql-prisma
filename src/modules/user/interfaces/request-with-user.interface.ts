import { Response } from 'express';
import { IUserFromRequest } from './user-from-request.interface';

export interface IRequestWithUser {
  user?: IUserFromRequest;
  res?: Response;
}
