import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  
  const app = await NestFactory.create(AppModule);
  
  const devMode = process.env.DEV_MODE ?? false;

  if (devMode) {
    const port = Number.parseInt(process.env.APPLICATION_PORT);
    const env = process.env.NODE_ENV;

    const config = new DocumentBuilder()
      .setTitle('Happye API')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(port).then((value) => {
      console.log(`Application running in port : ${port}, enviroment: ${env}`);
    });

  } else {
    dotenv.config({ path: process.cwd() + '/.env.prod' });
    const port = Number.parseInt(process.env.APPLICATION_PORT);
    const env = process.env.NODE_ENV;

    await app.listen(port).then((value) => {
      console.log(`Application running in port : ${port}, enviroment: ${env}`);
    });
  }
}
bootstrap();
