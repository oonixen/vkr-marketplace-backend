import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderProducts } from './order-products.model';

@Module({
  imports: [SequelizeModule.forFeature([OrderProducts])],
})
export class OrderProductsModule {}
