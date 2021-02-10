import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { IUserFromRequest } from '@common/global-interfaces';

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    let request;
    if (context.getType() === 'http') {
      request = context.switchToHttp().getRequest();
    } else if (context.getType<GqlContextType>() === 'graphql') {
      request = GqlExecutionContext.create(context).getContext().req;
    } else if (context.getType() === 'rpc') {
      throw new HttpException(
        'Not implemented',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const user = request?.user;
    if (!user) {
      throw new UnauthorizedException('No user found for request');
    }
    return user as IUserFromRequest;
  },
);

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
