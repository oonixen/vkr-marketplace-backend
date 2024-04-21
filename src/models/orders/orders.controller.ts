import { Body, Controller, Post, Req, Res, UseGuards, UsePipes } from '@nestjs/common';
import { OrdersCreateOrderBodyDto } from './dto/orders.create-order.body.dto';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { Response } from 'express';
import { AccessJWTTokenPayload } from '../auth/strategies/access-token.strategy';
import { OrdersService } from './orders.service';
import { ValidationNotEmptyPipe } from 'src/common/pipes/validations/validation.not-empty.pipe';

@Controller('order')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @UseGuards(AccessTokenGuard)
  @UsePipes(ValidationNotEmptyPipe)
  @Post()
  createOrder(
    @Res() response: Response,
    @Body() dto: OrdersCreateOrderBodyDto,
    @Req() req: Request & AccessJWTTokenPayload,
  ) {
    const customerId = req.user.id;

    return this.orderService.createOrder({ dto, customerId, response });
  }
}
