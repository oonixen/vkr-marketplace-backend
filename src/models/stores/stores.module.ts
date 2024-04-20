import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stores } from './stores.model';

@Module({
  imports: [SequelizeModule.forFeature([Stores])],
})
export class StoresModule {}
