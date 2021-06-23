import dotenv from 'dotenv';

export const envConfig = (): EnvConfig => {
  const mode = process.env.NODE_ENV;
  if (!mode || mode === 'development') {
    dotenv.config();
  } else {
    dotenv.config({ path: `.env.${mode}` });
  }

  const port = parseInt(process.env.PORT) || 5025;

  return {
    mode,
    port,
    serverUrl: process.env.SERVER_URL || `http://localhost:5025`,
    clientUrl: process.env.CLIENT_URL || `http://localhost:3000`,
    sessionSecret: process.env.SESSION_SECRET || `some-very-strong-secret`,
    cookieSecret: process.env.COOKIE_SECRET || `some-very-strong-secret`,
    email: {
      sendgridApiKey: process.env.SENDGRID_API_KEY,
      emailSender: process.env.EMAIL_AUTH_USER || 'your-email@yopmail.com'
    }
  };
};

export interface EnvConfig {
  mode: string;
  port: number;
  serverUrl: string;
  clientUrl: string;
  sessionSecret: string;
  cookieSecret: string;

  email: {
    sendgridApiKey: string;
    emailSender: string;
  };
}
