import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from '@modules/user/services/user.service';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { IPayloadUserJwt } from '@common/global-interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: any) => {
          return req?.session?.authToken.accessToken; //get access token from session
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_PRIVATE_KEY,
    });
  }
  public async validate(payload: IPayloadUserJwt) {
    const where: UserWhereUniqueInput = {
      id: payload.userId,
    };
    const user = await this.userService.getUserByUniqueInput(where);
    return user;
  }
}
