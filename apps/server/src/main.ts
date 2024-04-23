import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3002',
    methods: 'GET, POST, PUT, DELETE',
  });

  const PORT = process.env.SERVER_PORT;
  await app.listen(Number(PORT) || 3001);
}
bootstrap();
