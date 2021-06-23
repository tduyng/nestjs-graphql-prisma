import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { IPayloadUserJwt, IRequestWithUser } from '@common/global-interfaces';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { UserService } from '@modules/user/services/user.service';
import { PasswordService } from '@modules/auth/services/password.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token'
) {
  constructor(
    private readonly userService: UserService,
    private passwordService: PasswordService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: any) => {
          return req?.session?.authToken?.refreshToken;
        }
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_PRIVATE_KEY,
      passReqToCallback: true
    });
  }
  public async validate(req: IRequestWithUser, payload: IPayloadUserJwt) {
    const where: UserWhereUniqueInput = {
      id: payload.userId
    };
    const user = await this.userService.getUserByUniqueInput(where);
    if (!user) return null;

    const refreshToken = req.session?.authToken?.refreshToken;
    const isRefreshTokenMatching = await this.passwordService.validatePassword(
      refreshToken,
      user.currentHashedRefreshToken
    );

    // If refreshToken not match with token encrypted in database --> return null
    if (!isRefreshTokenMatching) return null;

    return user;
  }
}
