import { Table, Column, DataType, Model, HasMany } from 'sequelize-typescript';
import { ProductsProductCategories } from '../products-product-categories/products-product-categories.model';

@Table({ tableName: 'product_categories' })
export class ProductCategories extends Model<ProductCategories> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => ProductsProductCategories)
  products_product_categories: ProductsProductCategories[];
}
