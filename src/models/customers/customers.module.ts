import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customers } from './customers.model';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  controllers: [CustomersController],
  imports: [SequelizeModule.forFeature([Customers])],
  providers: [CustomersService],
  exports: [],
})
export class CustomersModule {}
