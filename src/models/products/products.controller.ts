import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('goods')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }
}
