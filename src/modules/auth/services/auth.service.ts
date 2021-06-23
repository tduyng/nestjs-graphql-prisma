import { UserWhereUniqueInput } from '@common/@generated/user';
import { environment } from '@common/environment';
import { IPayloadUserJwt } from '@common/global-interfaces';
import { REDIS_FORGOT_PASSWORD_PREFIX } from 'src/providers/redis/redis.constant';
import { RedisService } from 'src/providers/redis/redis.service';
import { ChangePasswordInput } from '@modules/user/dto';
import { PasswordService } from '@modules/auth/services/password.service';
import { UserService } from '@modules/user/services/user.service';
import { User } from '@modules/user/user.model';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserInput, ResetPasswordInput } from '../dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private redis: RedisService,
    private passwordService: PasswordService,
  ) {}

  public async validateUser(email: string, password: string) {
    const where: UserWhereUniqueInput = {
      email: email,
    };
    const user = await this.userService.getUserByUniqueInput(where);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const isMatchedPassword = await this.passwordService.validatePassword(
      password,
      user.password,
    );
    if (!isMatchedPassword) {
      throw new BadRequestException('Invalid credentials');
    }
    return user;
  }

  public async register(data: RegisterUserInput) {
    return this.userService.createOneUser(data);
  }

  public async generateAuthTokenFromLogin(payload: IPayloadUserJwt) {
    const envJwt = environment().jwtOptions;
    const accessTokenExpiresIn = envJwt.accessTokenExpiresIn;
    const refreshTokenExpiresIn = envJwt.accessTokenExpiresIn;

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: accessTokenExpiresIn,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: refreshTokenExpiresIn,
      }),
    };
  }

  public async resetCurrentHashesRefreshToken(
    where: UserWhereUniqueInput,
    refreshToken: string,
  ) {
    const currentHashedRefreshToken = await this.passwordService.hashPassword(
      refreshToken,
    );

    return this.userService.updateOneUser(where, {
      currentHashedRefreshToken,
    });
  }

  public async resetAccessToken(payload: IPayloadUserJwt) {
    const envJwt = environment().jwtOptions;
    const accessTokenExpiresIn = envJwt.accessTokenExpiresIn;

    return this.jwtService.signAsync(payload, {
      expiresIn: accessTokenExpiresIn,
    });
  }

  public async requestForgotPassword(email: string): Promise<string> {
    const where: UserWhereUniqueInput = {
      email,
    };
    const user = await this.userService.getUserByUniqueInput(where);
    if (!user) {
      throw new NotFoundException(`No user found with email ${email}`);
    }
    const payload: IPayloadUserJwt = {
      userId: user.id,
    };
    const envJwt = environment().jwtOptions;
    const expiresTime = envJwt.accessTokenExpiresIn || 60 * 60 * 2; // default 2h

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: expiresTime,
    });

    // Save token to redis with data = userId
    await this.redis.client.set(
      REDIS_FORGOT_PASSWORD_PREFIX + token,
      user.id,
      'ex',
      expiresTime,
    );

    // --> todo: send mail

    return token;
  }

  public async resetPassword(data: ResetPasswordInput): Promise<User> {
    // Get userId from redis and from jwt with token
    // Maybe use only token with jwt --> that's enough
    const { newPassword, token } = data;
    const userId = await this.redis.client.get(
      REDIS_FORGOT_PASSWORD_PREFIX + token,
    );
    const decoded = await this.jwtService.verifyAsync(token);
    const userIdFromJwt = decoded.userId;

    if (!userId || !userIdFromJwt || userId !== userIdFromJwt) {
      throw new BadRequestException('Token expired!');
    }

    // Get user by userId
    const user = await this.userService.getUserByUniqueInput({ id: userId });
    if (!user) {
      throw new BadRequestException('Token is not valid!');
    }

    const newHashedPassword = await this.passwordService.hashPassword(
      newPassword,
    );
    const updated = await this.userService.updateOneUser(
      { id: userId },
      { password: newHashedPassword },
    );
    await this.redis.client.del(REDIS_FORGOT_PASSWORD_PREFIX + token);

    return updated;
  }

  public async changePassword(
    userId: string,
    data: ChangePasswordInput,
  ): Promise<User> {
    const { newPassword, oldPassword } = data;

    // Get user by userId
    const user = await this.userService.getUserByUniqueInput({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isMatch = await this.passwordService.validatePassword(
      oldPassword,
      user.password,
    );

    if (!isMatch) {
      throw new BadRequestException(
        'Old password not match the current password',
      );
    }

    const newHashedPassword = await this.passwordService.hashPassword(
      newPassword,
    );
    const updated = await this.userService.updateOneUser(
      { id: userId },
      { password: newHashedPassword },
    );

    return updated;
  }
}
