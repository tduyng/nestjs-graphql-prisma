import { EnvironmentBase } from './environment.base';
import dotenv from 'dotenv';

dotenv.config();

export const environment: EnvironmentBase = {
  siteUrl: 'https://site.com',
  production: false,
  expressPort: process.env.SERVER_PORT,
  publicRegistration: true,
  graphql: {
    playground: false,
    uploads: {
      maxFileSize: 20_000_000, // 20 MB
      maxFiles: 5,
    },
  },
  jwtOptions: {
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
    signOptions: {
      algorithm: 'HS256',
      expiresIn: 7200, // 2 hour (in seconds)
    },
  },
  expiresInRememberMe: 2592000, // 30 days (in seconds)
  cookie: {
    secure: true,
    sameSite: 'lax',
  },
  mail: {
    transport: `smtps://${process.env.SMTP_LOGIN}:${process.env.SMTP_PASSWORD}@${process.env.SMTP_SERVER}`,
    defaults: {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    },
  },
  throttle: {
    limit: 10, // max 10 times
    ttl: 60, // 60second
  },
};
