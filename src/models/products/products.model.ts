import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { OrderProducts } from '../order-products/order-products.model';
import { ProductsProductModifiers } from '../products-product-modifiers/products-product-modifiers.model';
import { ProductsProductCategories } from '../products-product-categories/products-product-categories.model';
import { ProductsProductImages } from '../products-product-images/products-product-images.model';
import { ProductModifiers } from '../product-modifiers/product-modifiers.model';
import { ProductImages } from '../product-images/product-images.model';

@Table({ tableName: 'products' })
export class Products extends Model<Products> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING })
  info: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @HasMany(() => OrderProducts)
  order_products: OrderProducts[];

  @HasMany(() => ProductsProductModifiers)
  products_product_modifiers: ProductsProductModifiers[];

  @HasMany(() => ProductsProductCategories)
  products_product_categories: ProductsProductCategories[];

  @HasMany(() => ProductsProductImages)
  products_product_images: ProductsProductImages[];

  @BelongsToMany(() => ProductModifiers, { through: () => ProductsProductModifiers })
  modifiers: ProductModifiers[];

  @BelongsToMany(() => ProductImages, { through: () => ProductsProductImages })
  images: ProductImages[];
}
