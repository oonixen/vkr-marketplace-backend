import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { ProductsProductImages } from '../products-product-images/products-product-images.model';

@Table({ tableName: 'product_images' })
export class ProductImages extends Model<ProductImages> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  link: string;

  @HasMany(() => ProductsProductImages)
  products_product_iamges: ProductsProductImages[];
}
