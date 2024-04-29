import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_URL } from './data/globalConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: CLIENT_URL,
    methods: 'GET, POST, PUT, DELETE',
  });

  const { PORT } = process.env;
  await app.listen(Number(PORT) || 3001);
}
bootstrap();
