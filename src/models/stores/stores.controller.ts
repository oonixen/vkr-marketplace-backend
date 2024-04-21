import { Controller, Get } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Get('stores')
  getStores() {
    return this.storesService.getStore();
  }
}
