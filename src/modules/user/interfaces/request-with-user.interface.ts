import { User } from '@modules/user/user.model';
import { Response } from 'express';

export interface IRequestWithUser {
  user?: User;
  res?: Response;
}
