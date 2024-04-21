import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://localhost:5386'], methods: ['GET', 'POST'], credentials: true });
  await app.listen(process.env.PORT, process.env.HOST, () => {});
}
bootstrap();
