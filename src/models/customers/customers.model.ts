import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'customers' })
export class Customers extends Model<Customers> {
  @Column({ type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true, allowNull: false })
  id: string;

  @Column({ type: DataType.STRING(32), unique: true, allowNull: false })
  phone: string;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  balance: number;
}
