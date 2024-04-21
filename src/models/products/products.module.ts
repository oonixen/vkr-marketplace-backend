import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductCategories } from '../product-categories/product-categories.model';

@Module({
  controllers: [ProductsController],
  imports: [SequelizeModule.forFeature([Products, ProductCategories])],
  providers: [ProductsService],
})
export class ProductsModule {}
