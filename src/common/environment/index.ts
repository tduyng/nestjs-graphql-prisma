import dotenv from 'dotenv';
import { join } from 'path';
import { IEnvironment } from './environment.interface';
import { Algorithm } from 'jsonwebtoken';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: `${process.cwd()}/.env.production` });
} else {
  dotenv.config();
}
export const environment = () => {
  return {
    siteUrl: process.env.SITE_URL,
    serverPort: Number(process.env.SERVER_PORT),
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',

    // Graphql
    graphql: {
      playground: process.env.GRAPHQL_PLAYGROUND.toLowerCase() === 'true',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      uploads: {
        maxFileSize: 20_000_000, // 20 MB
        maxFiles: 5,
      },
      tracing: false,
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

    session: {
      secret: process.env.SESSION_SECRET,
    },

    // Email
    mail: {
      transport: `smtps://${process.env.SMTP_LOGIN}:${process.env.SMTP_PASSWORD}@${process.env.SMTP_SERVER}`,
      defaults: {
        from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      },
    },
  } as IEnvironment;
};
