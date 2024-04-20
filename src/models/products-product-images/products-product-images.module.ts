import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsProductImages } from './products-product-images.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductsProductImages])],
})
export class ProductsProductImagesModule {}
