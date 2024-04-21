import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { Request } from 'express';
import { AccessJWTTokenPayload } from '../auth/strategies/access-token.strategy';

@Controller()
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @UseGuards(AccessTokenGuard)
  @Get('user')
  getUser(@Req() req: Request & AccessJWTTokenPayload) {
    return this.customerService.getUser(req.user.id);
  }
}
