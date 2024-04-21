import { HttpStatus, Injectable } from '@nestjs/common';
import { OrdersCreateOrderBodyDto } from './dto/orders.create-order.body.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Stores } from '../stores/stores.model';
import { Response } from 'express';
import { Orders } from './orders.model';
import { Products } from '../products/products.model';
import { OrderProducts } from '../order-products/order-products.model';
import { OrderProductsProductModifiers } from '../order-products-product-modifiers/order-products-product-modifiers.model';

type CreateOrderProps = { dto: OrdersCreateOrderBodyDto; response: Response; customerId: string };

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Stores) private storesDb: typeof Stores,
    @InjectModel(Orders) private ordersDb: typeof Orders,
    @InjectModel(Products) private productsDb: typeof Products,
    @InjectModel(OrderProducts) private orderProductsDb: typeof OrderProducts,
    @InjectModel(OrderProductsProductModifiers)
    private orderProductsProductModifiersDb: typeof OrderProductsProductModifiers,
  ) {}

  async createOrder({ dto, response, customerId }: CreateOrderProps) {
    const store = await this.storesDb.findOne({ where: { id: dto.store } });
    if (!store) return response.status(HttpStatus.OK).json({ error: 'Пункт выдачи не найден' });

    try {
      await this.insertOrder(dto, customerId);
    } catch (e) {
      return response.status(HttpStatus.OK).json({ error: 'Ошибка в данных' });
    }

    return response.status(HttpStatus.CREATED).send('Created');
  }

  private async insertOrder(dto: OrdersCreateOrderBodyDto, customerId: string) {
    const dishesId = dto.goods.map((good) => good.id);
    const dishes = await this.productsDb.findAll({ where: { id: dishesId } });
    const price = dishes.reduce((prev, curr, index) => prev + curr.price * dto.goods[index].amount, 0);
    const order = await this.ordersDb.create({
      customer_id: customerId,
      store_id: dto.store,
      comment: dto.comment,
      date: new Date().toString(),
      price,
    });
    const createOrderProductsProps = dto.goods.map(({ id, amount }) => ({
      order_id: order.id,
      product_id: id,
      amount,
    }));
    const orderProducts = await this.orderProductsDb.bulkCreate(createOrderProductsProps);
    const createOrderProductsProductModifiersProps = orderProducts.map((v, index) => ({
      order_product_id: v.id,
      product_modifier_id: dto.goods[index].modifier,
    }));

    await this.orderProductsProductModifiersDb.bulkCreate(createOrderProductsProductModifiersProps);
  }
}
