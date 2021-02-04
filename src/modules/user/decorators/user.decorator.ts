import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IUserFromRequest } from '../interfaces/user-from-request.interface';

export const GqlUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const user = GqlExecutionContext.create(context).getContext().req.user;
    if (!user) throw new UnauthorizedException('No user found for request');
    return user;
  },
);

export const HttpUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    if (!req.user) {
      throw new UnauthorizedException('No user found for request');
    }
    return req.user as IUserFromRequest;
  },
);
