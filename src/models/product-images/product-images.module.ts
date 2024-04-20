import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductImages } from './product-images.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductImages])],
})
export class ProductImagesModule {}
