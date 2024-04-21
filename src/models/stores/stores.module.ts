import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stores } from './stores.model';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';

@Module({
  controllers: [StoresController],
  imports: [SequelizeModule.forFeature([Stores])],
  providers: [StoresService],
})
export class StoresModule {}
