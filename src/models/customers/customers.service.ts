import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customers } from './customers.model';

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customers) private readonly customers: typeof Customers) {}

  async getAll() {
    const res = await this.customers.findAll();

    return res;
  }
}
