declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly SERVER_PORT: string;
    readonly DB_HOST: string;
    readonly DB_USER: string;
    readonly DB_PASSWORD: string;
    readonly DB_PORT: string;
    readonly DB_DATABASE: string;
    readonly DATABASE_URL: string;
    readonly SMTP_SERVER: string;
    readonly SMTP_LOGIN: string;
    readonly SMTP_PASSWORD: string;
    readonly SMTP_FROM_NAME: string;
    readonly SMTP_FROM_EMAIL: string;
  }
}
