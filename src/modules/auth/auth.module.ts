import { EmailService } from '@modules/email/email.service';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { PrismaService } from '@modules/prisma/prisma.service';
import { RedisModule } from '@modules/redis/redis.module';
import { RedisService } from '@modules/redis/redis.service';
import { PasswordService } from '@modules/user/services/password.service';
import { UserService } from '@modules/user/services/user.service';
import { UserModule } from '@modules/user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh-token.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: true,
    }),
    JwtModule.register({
      secret: process.env.JWT_PRIVATE_KEY,
    }),
    UserModule,
    PrismaModule,
    RedisModule,
  ],
  providers: [
    PrismaService,
    UserService,
    JwtStrategy,
    JwtRefreshTokenStrategy,
    AuthService,
    UserService,
    PasswordService,
    AuthResolver,
    RedisService,
    EmailService,
  ],
})
export class AuthModule {}
