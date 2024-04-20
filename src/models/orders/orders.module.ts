import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Orders } from './orders.model';

@Module({
  imports: [SequelizeModule.forFeature([Orders])],
})
export class OrdersModule {}
