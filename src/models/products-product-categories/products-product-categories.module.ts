import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsProductCategories } from './products-product-categories.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductsProductCategories])],
})
export class ProductsProductCategoriesModule {}
