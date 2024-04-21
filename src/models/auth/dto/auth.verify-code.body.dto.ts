import { IsPhoneNumber, IsString, Length } from 'class-validator';
import {} from 'sequelize-typescript';
import { ErrorMessageValidation } from 'src/common/error-message/error-message.validation';

export class AuthVerifyCodeBodyDto {
  @IsString({ message: ErrorMessageValidation.toBeString() })
  @IsPhoneNumber('RU', { message: ErrorMessageValidation.toBePhoneNumber() })
  readonly phone: string;

  @IsString({ message: ErrorMessageValidation.toBeString() })
  @Length(4, 4, { message: ErrorMessageValidation.toBeLength(4) })
  readonly code: string;
}
