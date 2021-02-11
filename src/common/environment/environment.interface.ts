import { MailerOptions } from '@nestjs-modules/mailer';
import { GqlModuleOptions } from '@nestjs/graphql';
import { JwtModuleOptions } from '@nestjs/jwt';
import {} from 'express-session';

export interface IEnvironment {
  readonly siteUrl?: string;
  readonly serverPort: number;
  readonly isDevelopment: boolean;
  readonly isProduction: boolean;
  readonly session?: {
    secret: string;
  };
  readonly graphql?: GqlModuleOptions;
  readonly jwtOptions?: IJwtOptions;
  readonly mail?: Omit<MailerOptions, 'template'>;
}

export interface ISessionOption {
  secret: string;
}

export interface IJwtOptions extends JwtModuleOptions {
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}
