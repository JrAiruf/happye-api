import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number.parseInt(process.env["APPLICATION_PORT"]);
  const env = process.env["NODE_ENV"];
  if (env == "development") {
    const config = new DocumentBuilder()
      .setTitle('Happye API')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(port).then((value) => {
    console.log(`Application running in port : ${port}, enviroment: ${env}`);
  });

}
bootstrap();
