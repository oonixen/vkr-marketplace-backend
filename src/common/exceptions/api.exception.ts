import { HttpException, HttpStatus } from '@nestjs/common';

export type ApiExceptionResponseType = { message: string; errors?: Array<string>; statusCode?: HttpStatus };

export class ApiException extends HttpException {
  constructor(response: ApiExceptionResponseType, httpsStatus?: HttpStatus) {
    response.statusCode = response.statusCode || httpsStatus || HttpStatus.BAD_REQUEST;
    super(response, response.statusCode);
  }
}
