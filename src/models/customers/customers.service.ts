import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customers } from './customers.model';
import { CustomersAuth } from '../customers-auth/customers-auth.model';

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customers) private customers: typeof Customers) {}

  async getAll() {
    const res = await this.customers.findAll({ include: [CustomersAuth] });

    return res;
  }
}
