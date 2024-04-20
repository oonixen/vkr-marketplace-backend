import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Orders } from '../orders/orders.model';

@Table({ tableName: 'stores' })
export class Stores extends Model<Stores> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @HasMany(() => Orders)
  orders: Orders[];
}
