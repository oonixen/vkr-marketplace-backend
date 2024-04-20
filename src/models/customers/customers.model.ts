import { Column, DataType, Model, Table, HasMany, HasOne } from 'sequelize-typescript';
import { CustomersAuth } from '../customers-auth/customers-auth.model';
import { Orders } from '../orders/orders.model';

@Table({ tableName: 'customers' })
export class Customers extends Model<Customers> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING(32), unique: true, allowNull: false })
  phone: string;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  balance: number;

  @HasOne(() => CustomersAuth)
  customers_auth: CustomersAuth;

  @HasMany(() => Orders)
  orders: Orders[];
}
