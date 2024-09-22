import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Zaman dilimini UTC olarak ayarlayın

  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS hatalarını önlemek için
  await app.listen(3000);
}

bootstrap();
