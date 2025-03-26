import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api');
  app.use(helmet()); // Adds security headers to prevent XSS
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove unexpected properties
      forbidNonWhitelisted: true, // Throw error on unexpected properties
      transform: true, // Automatically transform types
    }),
  );
  const port =  configService.get('PORT')
  await app.listen(port ?? 3000);
} 
bootstrap();
