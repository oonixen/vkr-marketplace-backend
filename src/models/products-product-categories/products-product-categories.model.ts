import { Model, Table, Column, DataType, ForeignKey, HasMany, HasOne, BelongsTo } from 'sequelize-typescript';
import { Products } from '../products/products.model';
import { ProductCategories } from '../product-categories/product-categories.model';

@Table({ tableName: 'products_product_categories' })
export class ProductsProductCategories extends Model<ProductsProductCategories> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @ForeignKey(() => Products)
  @Column({ type: DataType.BIGINT, allowNull: false })
  product_id: string;

  @ForeignKey(() => ProductCategories)
  @Column({ type: DataType.BIGINT, allowNull: false })
  product_category_id: string;

  @BelongsTo(() => Products)
  product: Products;

  @BelongsTo(() => ProductCategories)
  product_category: ProductCategories;
}
