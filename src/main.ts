import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Zaman dilimini UTC olarak ayarlayın

  const app = await NestFactory.create(AppModule, { bodyParser: true });
  
  // Global validation pipe ekleyin
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Dönüşüm yapılabilmesi için bu ayarı ekleyin
  }));
  
  // CORS ayarları
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  });
  
  // Sunucuyu 3000 portunda başlatın
  await app.listen(3000);
}

bootstrap();
