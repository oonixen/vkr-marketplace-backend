import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { OrderProductsProductModifiers } from '../order-products-product-modifiers/order-products-product-modifiers.model';
import { ProductsProductModifiers } from '../products-product-modifiers/products-product-modifiers.model';

@Table({ tableName: 'product_modifiers' })
export class ProductModifiers extends Model<ProductModifiers> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => OrderProductsProductModifiers)
  order_products_product_Modifiers: OrderProductsProductModifiers;

  @HasMany(() => ProductsProductModifiers)
  products_product_modifiers: ProductsProductModifiers[];
}
