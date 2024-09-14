import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number.parseInt(process.env["APPLICATION_PORT"]);
  const env = process.env["NODE_ENV"];

  await app.listen(port).then((value) => {
    console.log(`Application running in port : ${port}, enviroment: ${env}`);
  });
}
bootstrap();
