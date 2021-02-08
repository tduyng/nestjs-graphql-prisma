import { MailerOptions } from '@nest-modules/mailer';
import { GqlModuleOptions } from '@nestjs/graphql';
import { JwtModuleOptions } from '@nestjs/jwt';
import { CookieOptions } from 'express';

export interface IEnvironment {
  readonly siteUrl?: string;
  readonly serverPort: number;
  readonly isDevelopment: boolean;
  readonly isProduction: boolean;
  readonly cookie?: Omit<CookieOptions, 'maxAge'>;
  readonly graphql?: GqlModuleOptions;
  readonly jwtOptions?: JwtModuleOptions;
  readonly expiresInRememberMe?: number;
  readonly mail?: Omit<MailerOptions, 'template'>;
}
