import { IsPhoneNumber, IsString } from 'class-validator';
import { ErrorMessageValidation } from 'src/common/error-message/error-message.validation';

export class AuthSendCodeBodyDto {
  @IsString({ message: ErrorMessageValidation.toBeString() })
  @IsPhoneNumber('RU', { message: ErrorMessageValidation.toBePhoneNumber() })
  readonly phone: string;
}
