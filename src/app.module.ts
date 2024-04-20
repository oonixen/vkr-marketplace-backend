import { Module } from '@nestjs/common';
import { CustomersModule } from './models/customers/customers.module';
import { Customers } from './models/customers/customers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { CustomersAuthModule } from './models/customers-auth/customers-auth.module';
import { CustomersAuth } from './models/customers-auth/customers-auth.model';
import { Stores } from './models/stores/stores.model';
import { StoresModule } from './models/stores/stores.module';
import { Orders } from './models/orders/orders.model';
import { OrdersModule } from './models/orders/orders.module';
import { Products } from './models/products/products.model';
import { ProductsModule } from './models/products/products.module';
import { OrderProductsModule } from './models/order-products/order-products.module';
import { OrderProducts } from './models/order-products/order-products.model';
import { ProductModifiers } from './models/product-modifiers/product-modifiers.model';
import { ProductModifiersModule } from './models/product-modifiers/product-modifiers.module';
import { OrderProductsProductModifiers } from './models/order-products-product-modifiers/order-products-product-modifiers.model';
import { OrderProductsProductModifiersModule } from './models/order-products-product-modifiers/order-products-product-modifiers.module';
import { ProductsProductModifiers } from './models/products-product-modifiers/products-product-modifiers.model';
import { ProductsProductModifiersModule } from './models/products-product-modifiers/products-product-modifiers.module';
import { ProductCategories } from './models/product-categories/product-categories.model';
import { ProductCategoriesModule } from './models/product-categories/product-categories.module';
import { ProductsProductCategories } from './models/products-product-categories/products-product-categories.model';
import { ProductsProductCategoriesModule } from './models/products-product-categories/products-product-categories.module';
import { ProductImages } from './models/product-images/product-images.model';
import { ProductImagesModule } from './models/product-images/product-images.module';
import { ProductsProductImages } from './models/products-product-images/products-product-images.model';
import { ProductsProductImagesModule } from './models/products-product-images/products-product-images.module';

const configDynamicModule = ConfigModule.forRoot({
  envFilePath: `.env.${process.env.NODE_ENV}`,
});
const sequelizeDynamicModule = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  timezone: '+04:00',
  models: [
    Customers,
    CustomersAuth,
    Stores,
    Orders,
    Products,
    OrderProducts,
    ProductModifiers,
    OrderProductsProductModifiers,
    ProductsProductModifiers,
    ProductCategories,
    ProductsProductCategories,
    ProductImages,
    ProductsProductImages,
  ],
  define: { timestamps: false },
});
const imports = [
  configDynamicModule,
  sequelizeDynamicModule,
  CustomersModule,
  CustomersAuthModule,
  StoresModule,
  OrdersModule,
  ProductsModule,
  OrderProductsModule,
  ProductModifiersModule,
  OrderProductsProductModifiersModule,
  ProductsProductModifiersModule,
  ProductCategoriesModule,
  ProductsProductCategoriesModule,
  ProductImagesModule,
  ProductsProductImagesModule,
];

@Module({
  controllers: [],
  providers: [],
  imports,
})
export class AppModule {}
