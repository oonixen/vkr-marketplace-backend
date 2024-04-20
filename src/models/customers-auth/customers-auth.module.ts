import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomersAuth } from './customers-auth.model';

@Module({
  controllers: [],
  imports: [SequelizeModule.forFeature([CustomersAuth])],
})
export class CustomersAuthModule {}
