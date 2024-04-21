import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Stores } from './stores.model';

@Injectable()
export class StoresService {
  constructor(@InjectModel(Stores) private storesDb: typeof Stores) {}

  getStore() {
    return this.storesDb.findAll();
  }
}
