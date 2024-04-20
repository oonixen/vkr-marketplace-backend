import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategories } from './product-categories.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategories])],
})
export class ProductCategoriesModule {}
