import dotenv from 'dotenv';
import { join } from 'path';
import { EnvironmentBase } from './environment.base';
import { Algorithm } from 'jsonwebtoken';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: `${process.cwd()}/.env.production` });
} else {
  dotenv.config();
}
export const environment: EnvironmentBase = {
  siteUrl: process.env.SITE_URL,

  // Graphql
  graphql: {
    playground: process.env.GRAPHQL_PLAYGROUND.toLowerCase() === 'true',
    debug: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    introspection: true,
    cors: true,
    uploads: {
      maxFileSize: 20_000_000, // 20 MB
      maxFiles: 5,
    },
  },

  // JWT
  jwtOptions: {
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
    secret: process.env.JWT_PRIVATE_KEY,
    signOptions: {
      algorithm: process.env.JWT_ALGORITHM as Algorithm,
      expiresIn: Number(process.env.JWT_EXPIRE_TIME),
    },
  },
  expiresInRememberMe: Number(process.env.JWT_EXPIRE_REFRESH_TIME),

  // Cookie
  cookie: {
    secure: process.env.COOKIE_SECURE.toLowerCase() === 'true',
    sameSite: process.env.COOKIE_SECURE as CookieSameSiteType,
    domain: process.env.COOKIE_DOMAIN,
  },

  // Email
  mail: {
    transport: `smtps://${process.env.SMTP_LOGIN}:${process.env.SMTP_PASSWORD}@${process.env.SMTP_SERVER}`,
    defaults: {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    },
  },
};

type CookieSameSiteType = boolean | 'lax' | 'strict' | 'none';
