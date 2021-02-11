import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { LoginUserInput, RegisterUserInput } from './dto';
import { AuthService } from './auth.service';
import { BadRequestException } from '@nestjs/common';
import {
  IHttpContext,
  IPayloadUserJwt,
  ISessionAuthToken,
} from '@common/global-interfaces';
import { REDIS_AUTH_TOKEN_SESSION } from '@modules/redis/redis.constant';
// import { RedisService } from '@modules/redis/redis.service';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}
  /* Queries*/

  /* Mutation*/
  // authRegister
  @Mutation(() => User)
  public async register(@Args('data') data: RegisterUserInput) {
    const user = await this.authService.register(data);

    // Todo: Send verification

    return user;
  }
  // authLogin
  @Mutation(() => User)
  public async login(
    @Args('data') data: LoginUserInput,
    @Context() ctx: IHttpContext,
  ) {
    const { email, password } = data;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload: IPayloadUserJwt = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };
    const authToken: ISessionAuthToken = await this.authService.generateAuthTokenFromLogin(
      payload,
    );
    // Save token to session (auto save with redis)
    ctx.req.session.authToken = authToken;
    return user;
  }

  @Mutation(() => Boolean)
  public async logout(@Context() ctx: IHttpContext) {
    try {
      await ctx.req.session?.destroy();
      ctx.req.res?.clearCookie(REDIS_AUTH_TOKEN_SESSION);
      return true;
    } catch (error) {
      return false;
    }
  }
  /* Mutation*/
  // authPasswordResetRequest
  // changePassword
}
