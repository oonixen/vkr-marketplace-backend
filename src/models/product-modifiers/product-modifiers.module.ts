import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModifiers } from './product-modifiers.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductModifiers])],
})
export class ProductModifiersModule {}
