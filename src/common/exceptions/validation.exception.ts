import { ApiException, ApiExceptionResponseType } from './api.exception';
import { HttpStatus } from '@nestjs/common';

export class ValidationException extends ApiException {
  constructor(response: ApiExceptionResponseType, statusCode?: HttpStatus) {
    super(response, statusCode);
  }
}
