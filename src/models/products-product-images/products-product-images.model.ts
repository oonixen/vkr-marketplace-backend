import { Model, Table, Column, DataType, ForeignKey, HasOne, BelongsTo } from 'sequelize-typescript';
import { Products } from '../products/products.model';
import { ProductImages } from '../product-images/product-images.model';

@Table({ tableName: 'products_product_images' })
export class ProductsProductImages extends Model<ProductsProductImages> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @ForeignKey(() => Products)
  @Column({ type: DataType.BIGINT, allowNull: false })
  product_id: string;

  @ForeignKey(() => ProductImages)
  @Column({ type: DataType.BIGINT, allowNull: false })
  product_image_id: string;

  @BelongsTo(() => ProductImages)
  product_image: ProductImages;

  @BelongsTo(() => Products)
  product: Products;
}
