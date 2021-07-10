import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import { ValidationException } from './exceptions/validation.exception';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationFilter } from './filters/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter(), new ValidationFilter());
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const errorMessages = {};
        errors.forEach((error: ValidationError) => {
          let errorsCustom = [];

          Object.keys(error.constraints).forEach((errorDetail) => {
            errorsCustom.push(error.constraints[errorDetail]);
          });

          errorMessages[error.property] = errorsCustom;
        });

        return new ValidationException(errorMessages);
      },
    }),
  );

  const port = 3000;
  await app.listen(port);
  console.log(`Listening on port ${port}`)
}
bootstrap();
