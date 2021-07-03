import {ArgumentsHost, Catch, ExceptionFilter} from '@nestjs/common';
import { ValidationException } from 'src/exceptions/validation.exception';

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(expcetion: ValidationException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      errors: expcetion.validationErrors,
    })
  }
}