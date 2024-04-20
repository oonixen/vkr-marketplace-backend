import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Customers } from '../customers/customers.model';
import { Stores } from '../stores/stores.model';
import { OrderProducts } from '../order-products/order-products.model';

@Table({ tableName: 'orders' })
export class Orders extends Model<Orders> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @ForeignKey(() => Customers)
  @Column({ type: DataType.BIGINT })
  customer_id: string;

  @ForeignKey(() => Stores)
  @Column({ type: DataType.BIGINT, allowNull: false })
  store_id: string;

  @Column({ type: DataType.STRING })
  comment: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @Column({ type: DataType.DATE, allowNull: false })
  date: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  is_received: boolean;

  @HasMany(() => OrderProducts)
  order_products: OrderProducts[];

  @BelongsTo(() => Stores)
  store: Stores;

  @BelongsTo(() => Customers)
  customer: Customers;
}
