import { Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Products } from '../products/products.model';
import { ProductModifiers } from '../product-modifiers/product-modifiers.model';

@Table({ tableName: 'products_product_modifiers' })
export class ProductsProductModifiers extends Model<ProductsProductModifiers> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @ForeignKey(() => Products)
  @Column({ type: DataType.BIGINT, allowNull: false })
  product_id: string;

  @ForeignKey(() => ProductModifiers)
  @Column({ type: DataType.BIGINT, allowNull: false })
  product_modifier_id: string;

  @HasOne(() => Products)
  product: Products;

  @HasOne(() => ProductModifiers)
  product_modifier: ProductModifiers;
}
