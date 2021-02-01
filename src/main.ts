import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { setupSwagger } from '@common/configs/swagger-options';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Validation
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  setupSwagger(app);
  const port = Number(process.env.SERVER_PORT);

  await app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}
bootstrap();
