import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { LoginUserInput, RegisterUserInput } from './dto';
import { AuthService } from './auth.service';
import { BadRequestException, UseGuards } from '@nestjs/common';
import {
  IHttpContext,
  IPayloadUserJwt,
  ISessionAuthToken,
} from '@common/global-interfaces';
import { REDIS_AUTH_TOKEN_SESSION } from '@modules/redis/redis.constant';
import { ChangePasswordInput } from '@modules/user/dto';
import { EmailService } from '@modules/email/email.service';
import { JwtGuard } from './guards';

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private emailService: EmailService,
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
    if (user) {
      await this.emailService.sendWelcome(user.email);
    }
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
    };
    const authToken: ISessionAuthToken = await this.authService.generateAuthTokenFromLogin(
      payload,
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
  public async changePassword(
    @Args('data') data: ChangePasswordInput,
    @Context() ctx: IHttpContext,
  ) {
    const user = await this.authService.changePassword(data);
    const payload: IPayloadUserJwt = {
      userId: user.id,
    };
    const authToken = this.authService.generateAuthTokenFromLogin(payload);
    // Login auto after change password
    ctx.req.session.authToken = authToken;
    return user;
  }
}
