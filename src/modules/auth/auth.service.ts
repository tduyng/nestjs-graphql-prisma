import { UserWhereUniqueInput } from '@common/@generated/user';
import { environment } from '@common/environment';
import { IPayloadUserJwt, ISessionAuthToken } from '@common/global-interfaces';
import { UserService } from '@modules/user/services/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { RegisterUserInput } from './dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(email: string, password: string) {
    const where: UserWhereUniqueInput = {
      email: email,
    };
    const user = await this.userService.getUserByUniqueInput(where);
    const isMatchedPassword = await bcrypt.compare(password, user?.password);
    if (!user || !isMatchedPassword) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  public async register(data: RegisterUserInput) {
    const user = await this.userService.createOneUser(data);
    return user;
  }

  public async generateAuthTokenFromLogin(payload: IPayloadUserJwt) {
    const envJwt = environment().jwtOptions;
    const accessTokenExpiresIn = envJwt.accessTokenExpiresIn;
    const refreshTokenExpiresIn = envJwt.accessTokenExpiresIn;

    const sessionAuthToken: ISessionAuthToken = {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: accessTokenExpiresIn,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: refreshTokenExpiresIn,
      }),
    };
    return sessionAuthToken;
  }
}
