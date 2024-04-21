import { IsNumber, IsString } from 'class-validator';
import { ErrorMessageValidation } from 'src/common/error-message/error-message.validation';

export class OrdersCreateOrderGoodsDto {
  @IsString({ message: ErrorMessageValidation.toBeString() })
  id: string;

  @IsString({ message: ErrorMessageValidation.toBeString() })
  modifier: string;

  @IsNumber({}, { message: ErrorMessageValidation.toBeString() })
  amount: number;
}
