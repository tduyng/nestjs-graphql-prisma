import { MailerOptions } from '@nest-modules/mailer';
import { JwtModuleOptions } from '@nestjs/jwt';
import { FileUploadOptions } from 'apollo-server-core';
import { CookieOptions } from 'express';

export abstract class EnvironmentBase {
  readonly siteUrl?: string;
  readonly cookie?: Omit<CookieOptions, 'maxAge'>;
  readonly production?: boolean;
  readonly serverPort?: number;
  readonly graphql?: {
    readonly playground: boolean;
    readonly uploads?: boolean | FileUploadOptions;
    readonly debug: boolean;
    readonly autoSchemaFile: string;
    readonly sortSchema: boolean;
    readonly introspection: boolean;
    readonly cors: boolean;
  };
  readonly jwtOptions?: JwtModuleOptions;
  readonly expiresInRememberMe?: number;
  readonly mail?: Omit<MailerOptions, 'template'>;
}
