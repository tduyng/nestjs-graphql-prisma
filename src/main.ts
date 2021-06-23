import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '@common/configs/setup-swagger';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import { Logger } from '@nestjs/common';
import RateLimit from 'express-rate-limit';
import { environment } from '@common/environment';
import { useContainer } from 'class-validator';
import { AllExceptionsFilter } from '@common/global-exceptions-filter/all-exceptions.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { sessionConfig } from '@common/configs/session-config';
import session from 'express-session';
import Redis from 'ioredis';
import { ISessionOption } from '@common/environment/environment.interface';
import passport from 'passport';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: true
  });
  const env = environment();
  const port: number = env.serverPort;
  const siteUrl: string = env.siteUrl;

  app.enableCors();
  app.use(cookieParser());
  app.use(express.json());

  if (env.isProduction) {
    app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    app.use(compression());
    app.use(helmet());

    app.use(
      RateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
      })
    );
  }

  // Setup session with redis
  const redisClient = new Redis();
  const sessionEnv: ISessionOption = env.session;
  const sessionOptions = sessionConfig(redisClient, sessionEnv);
  app.use(session(sessionOptions));

  // init 'passport' (npm install passport)
  app.use(passport.initialize());
  app.use(passport.session());

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      transform: true,
      validationError: {
        target: false
      }
    })
  );

  // Custom exceptions filter
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  setupSwagger(app);

  await app.listen(port, () => {
    Logger.log(`Server is running at ${siteUrl}graphql`);
  });
}
bootstrap();
