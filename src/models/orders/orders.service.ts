import { HttpStatus, Injectable } from '@nestjs/common';
import { OrdersCreateOrderBodyDto } from './dto/orders.create-order.body.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Stores } from '../stores/stores.model';
import { Response } from 'express';
import { Orders } from './orders.model';
import { Products } from '../products/products.model';
import { OrderProducts } from '../order-products/order-products.model';
import { OrderProductsProductModifiers } from '../order-products-product-modifiers/order-products-product-modifiers.model';
import { Customers } from '../customers/customers.model';
import { Transaction } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

type CreateOrderProps = { dto: OrdersCreateOrderBodyDto; response: Response; customerId: string };
type InsertOrderProps = { dto: OrdersCreateOrderBodyDto; customerId: string; transaction: Transaction; price: number };

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Stores) private storesDb: typeof Stores,
    @InjectModel(Orders) private ordersDb: typeof Orders,
    @InjectModel(Products) private productsDb: typeof Products,
    @InjectModel(OrderProducts) private orderProductsDb: typeof OrderProducts,
    @InjectModel(OrderProductsProductModifiers)
    private orderProductsProductModifiersDb: typeof OrderProductsProductModifiers,
    @InjectModel(Customers) private customersDb: typeof Customers,
    private sequelize: Sequelize,
  ) {}

  async createOrder({ dto, response, customerId }: CreateOrderProps) {
    const store = await this.storesDb.findOne({ where: { id: dto.store } });

    if (!store) return this.returnOrderError('Пункт выдачи не найден', response);

    const customer = await this.customersDb.findOne({ where: { id: customerId } });
    const price = await this.getPrice(dto);

    if (customer.balance < price) return this.returnOrderError('Недостаточно баллов для оплаты', response);

    try {
      await this.sequelize.transaction(async (transaction) => {
        await this.insertOrder({ dto, customerId, transaction, price });
        await this.customersDb.update(
          { balance: this.sequelize.literal(`balance - ${price}`) },
          { where: { id: customerId }, transaction },
        );
      });
    } catch (e) {
      return this.returnOrderError('Ошибка данных', response);
    }

    return response.status(HttpStatus.CREATED).send('Created');
  }

  private async insertOrder({ dto, customerId, transaction, price }: InsertOrderProps) {
    const order = await this.ordersDb.create(
      {
        customer_id: customerId,
        store_id: dto.store,
        comment: dto.comment,
        date: new Date().toString(),
        price,
      },
      { transaction },
    );
    const createOrderProductsProps = dto.goods.map(({ id, amount }) => ({
      order_id: order.id,
      product_id: id,
      amount,
    }));
    const orderProducts = await this.orderProductsDb.bulkCreate(createOrderProductsProps, { transaction });
    const createOrderProductsProductModifiersProps = orderProducts.map((v, index) => ({
      order_product_id: v.id,
      product_modifier_id: dto.goods[index].modifier.id,
    }));

    await this.orderProductsProductModifiersDb.bulkCreate(createOrderProductsProductModifiersProps, { transaction });
  }

  private async getPrice(dto: OrdersCreateOrderBodyDto) {
    const goodsIds = dto.goods.map((good) => good.id);
    const products = await this.productsDb.findAll({ where: { id: goodsIds } });
    const price = dto.goods.reduce((sum, good) => {
      const productFromDb = products[products.findIndex((v) => v.id === good.id)];
      return sum + good.amount * productFromDb.price;
    }, 0);

    return price;
  }

  private returnOrderError(error: string, response: Response) {
    return response.status(HttpStatus.OK).json({ error });
  }
}
