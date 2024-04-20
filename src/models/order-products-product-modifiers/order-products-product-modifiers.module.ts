import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderProductsProductModifiers } from './order-products-product-modifiers.model';

@Module({
  imports: [SequelizeModule.forFeature([OrderProductsProductModifiers])],
})
export class OrderProductsProductModifiersModule {}
