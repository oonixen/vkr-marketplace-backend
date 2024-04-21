import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ErrorMessageValidation } from 'src/common/error-message/error-message.validation';
import { OrdersCreateOrderGoodsDto } from './orders.create-order.goods.dto';

export class OrdersCreateOrderBodyDto {
  @IsString({ message: ErrorMessageValidation.toBeString() })
  readonly store: string;

  @IsOptional()
  @IsString({ message: ErrorMessageValidation.toBeString() })
  readonly comment?: string;

  @IsNotEmpty({ message: ErrorMessageValidation.toBeNotEmpty() })
  readonly goods: OrdersCreateOrderGoodsDto[];
}
