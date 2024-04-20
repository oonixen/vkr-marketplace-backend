import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Customers } from '../customers/customers.model';

@Table({ tableName: 'customers_auth' })
export class CustomersAuth extends Model<CustomersAuth> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @ForeignKey(() => Customers)
  @Column({ type: DataType.BIGINT, allowNull: false })
  customer_id: string;

  @Column({ type: DataType.STRING })
  refresh_token: string;

  @BelongsTo(() => Customers)
  customer: Customers;
}
