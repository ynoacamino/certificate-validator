import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://certificate-validator-sigma.vercel.app/',
    methods: 'GET, POST, PUT, DELETE',
  });

  const { PORT } = process.env;
  await app.listen(Number(PORT) || 3001);
}
bootstrap();
