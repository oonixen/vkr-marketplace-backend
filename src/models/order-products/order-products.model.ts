import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Orders } from '../orders/orders.model';
import { Products } from '../products/products.model';
import { OrderProductsProductModifiers } from '../order-products-product-modifiers/order-products-product-modifiers.model';

@Table({ tableName: 'order_products' })
export class OrderProducts extends Model<OrderProducts> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @ForeignKey(() => Orders)
  @Column({ type: DataType.BIGINT, allowNull: false })
  order_id: string;

  @ForeignKey(() => Products)
  @Column({ type: DataType.BIGINT, allowNull: false })
  product_id: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  amount: number;

  @BelongsTo(() => Orders)
  order: Orders;

  @BelongsTo(() => Products)
  product: Products;

  @HasOne(() => OrderProductsProductModifiers)
  order_products_product_Modifiers: OrderProductsProductModifiers;
}
