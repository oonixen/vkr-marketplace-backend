import { IsNotEmptyObject, IsNumber, IsString } from 'class-validator';
import { ErrorMessageValidation } from 'src/common/error-message/error-message.validation';

export class OrdersCreateOrderGoodsDto {
  @IsString({ message: ErrorMessageValidation.toBeString() })
  id: string;

  @IsNotEmptyObject({}, { message: ErrorMessageValidation.toBeNotEmpty() })
  modifier: { id: string; name: string };

  @IsNumber({}, { message: ErrorMessageValidation.toBeString() })
  amount: number;
}
