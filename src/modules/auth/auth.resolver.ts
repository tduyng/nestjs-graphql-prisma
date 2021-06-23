import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { LoginUserInput, RegisterUserInput, ResetPasswordInput } from './dto';
import { AuthService } from './services/auth.service';
import { BadRequestException, UseGuards } from '@nestjs/common';
import {
  IHttpContext,
  IPayloadUserJwt,
  IRequestWithUser,
  ISessionAuthToken
} from '@common/global-interfaces';
import { REDIS_AUTH_TOKEN_SESSION } from 'src/providers/redis/redis.constant';
import { ChangePasswordInput } from '@modules/user/dto';
import { EmailService } from 'src/providers/email/email.service';
import { JwtGuard, JwtRefreshTokenGuard } from './guards';

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}
  /* Queries*/

  /* Mutation*/
  // authRegister
  @Mutation(() => User)
  public async register(@Args('data') data: RegisterUserInput) {
    const user = await this.authService.register(data);
    // --> Todo: Send verification
    // If process.env === 'production'

    // Test send welcome after registration
    if (user && process.env.NODE_ENV === 'development') {
      await this.emailService.sendWelcome(user.email);
    }
    return user;
  }

  // authLogin
  @Mutation(() => User)
  public async login(
    @Args('data') data: LoginUserInput,
    @Context() ctx: IHttpContext
  ) {
    const { email, password } = data;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload: IPayloadUserJwt = {
      userId: user.id
    };
    const authToken: ISessionAuthToken = await this.authService.generateAuthTokenFromLogin(
      payload
    );

    // Reset column currentHashedRefreshToken of user
    await this.authService.resetCurrentHashesRefreshToken(
      { id: user.id },
      authToken.refreshToken
    );

    // Save token to session (auto save with redis)
    ctx.req.session.authToken = authToken;
    return user;
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtGuard)
  public async logout(@Context() ctx: IHttpContext) {
    try {
      await ctx.req.session?.destroy();
      ctx.req.res?.clearCookie(REDIS_AUTH_TOKEN_SESSION);
      return true;
    } catch (error) {
      return false;
    }
  }

  @Mutation(() => String)
  @UseGuards(JwtRefreshTokenGuard)
  public async refreshToken(@Context() ctx: IHttpContext) {
    const req = ctx.req as IRequestWithUser;
    const { user } = req;
    const payload: IPayloadUserJwt = {
      userId: user.id
    };
    const newAccessToken = await this.authService.resetAccessToken(payload);
    const currentRefreshToken = req.session?.authToken.refreshToken;
    const authToken: ISessionAuthToken = {
      accessToken: newAccessToken,
      refreshToken: currentRefreshToken
    };

    // Update session
    ctx.req.session.authToken = authToken;
    return newAccessToken;
  }

  /**
   * Request forgot password
   */
  @Mutation(() => String)
  public async forgotPassword(@Args('email') email: string): Promise<string> {
    const token = await this.authService.requestForgotPassword(email);

    // --> Todo: send mail --> need check on production
    this.emailService.sendPasswordReset(email, token);

    return token;
  }

  // changePassword
  @Mutation(() => User)
  @UseGuards(JwtGuard)
  public async changePassword(
    @Args('data') data: ChangePasswordInput,
    @Context() ctx: IHttpContext
  ) {
    const user = await this.authService.changePassword(ctx.req.user.id, data);
    const payload: IPayloadUserJwt = {
      userId: user.id
    };
    const authToken = this.authService.generateAuthTokenFromLogin(payload);
    // Login auto after change password
    ctx.req.session.authToken = authToken;
    return user;
  }

  @Mutation(() => User)
  public async resetPassword(
    @Args('data') data: ResetPasswordInput,
    @Context() ctx: IHttpContext
  ) {
    const user = await this.authService.resetPassword(data);
    const payload: IPayloadUserJwt = {
      userId: user.id
    };
    const authToken = this.authService.generateAuthTokenFromLogin(payload);
    // Login auto after change password
    await this.logout(ctx.req);
    return authToken;
  }
}
