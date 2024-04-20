import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { OrderProducts } from '../order-products/order-products.model';
import { ProductModifiers } from '../product-modifiers/product-modifiers.model';

@Table({ tableName: 'order_products_product_modifiers' })
export class OrderProductsProductModifiers extends Model<OrderProductsProductModifiers> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.BIGINT, allowNull: false })
  order_product_id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  product_modifier_id: string;

  @HasOne(() => OrderProducts)
  order_products: OrderProducts;

  @HasOne(() => ProductModifiers)
  product_modifier: ProductModifiers;
}
