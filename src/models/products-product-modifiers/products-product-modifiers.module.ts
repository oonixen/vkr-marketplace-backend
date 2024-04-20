import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsProductModifiers } from './products-product-modifiers.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductsProductModifiers])],
})
export class ProductsProductModifiersModule {}
