import { IUserFromRequest } from '@modules/user/interfaces/user-from-request.interface';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '@prisma/client';

@Injectable()
export class GqlGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }
  public async canActivate(context: ExecutionContext) {
    await super.canActivate(context);

    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user as IUserFromRequest;

    // role get from @Role decorator
    const classRole = this.reflector.get<Role[]>('roles', ctx.getClass());
    const handlerRole = this.reflector.get<Role[]>('roles', ctx.getHandler());

    let allowedRoles: Role[] = [];

    // If we use class for Role (not enum)
    if (classRole) allowedRoles = classRole;
    if (handlerRole) allowedRoles.concat(handlerRole);

    // if we don't have role in database, ==> always access
    // Check more at https://docs.nestjs.com/guards
    if (allowedRoles.length === 0) return true;

    allowedRoles.push(Role.ADMIN); // Grants Admin user full access

    // if array[Admin, role from decorator ...] include user role --> alow access
    return user.role && allowedRoles.includes(user.role);
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
