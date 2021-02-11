import {
  Args,
  Context,
  Info,
  Mutation,
  Resolver,
  Query,
} from '@nestjs/graphql';
import { User } from '@modules/user/user.model';
import { LoginUserInput, RegisterUserInput } from './dto';
import { AuthService } from './auth.service';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { IHttpContext, IPayloadUserJwt } from '@common/global-interfaces';
import { GraphQLResolveInfo } from 'graphql';
import { UserService } from '@modules/user/services/user.service';
import { CurrentUser } from '@modules/user/decorators';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { JwtGuard } from './guards/jwt.guard';

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  /* Queries*/
  @Query(() => User)
  @UseGuards(JwtGuard)
  public async me(@CurrentUser() user: User, @Info() info: GraphQLResolveInfo) {
    const where: UserWhereUniqueInput = {
      id: user.id,
    };
    return await this.userService.getUserByUniqueInput(where, info);
  }

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
    const authToken = await this.authService.generateAuthTokenFromLogin(
      payload,
    );
    // Save token to session (auto save with redis)
    ctx.req.session.authToken = authToken;
    return user;
  }
  // authPasswordResetRequest
  /* Mutation*/
  // register
  // login
  // changePassword
}
