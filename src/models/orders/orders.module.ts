import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Orders } from './orders.model';
import { Stores } from '../stores/stores.model';
import { Products } from '../products/products.model';
import { OrderProducts } from '../order-products/order-products.model';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderProductsProductModifiers } from '../order-products-product-modifiers/order-products-product-modifiers.model';
import { Customers } from '../customers/customers.model';
import { Sequelize } from 'sequelize-typescript';

@Module({
  controllers: [OrdersController],
  imports: [
    SequelizeModule.forFeature([Orders, Stores, Products, OrderProducts, OrderProductsProductModifiers, Customers]),
  ],
  providers: [OrdersService],
})
export class OrdersModule {}
