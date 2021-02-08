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

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: true });
  const env = environment();
  const port: number = env.serverPort;
  const siteUrl: string = env.siteUrl;

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      transform: true,
      validationError: {
        target: false,
      },
    }),
  );

  // Custom exceptions filter
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.enableCors();
  app.use(cookieParser());

  if (env.isProduction) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(
    RateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  setupSwagger(app);

  await app.listen(port, () => {
    Logger.log(`Server is running at ${siteUrl}`);
  });
}
bootstrap();
