import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customers } from './customers.model';
import { CustomersAuth } from '../customers-auth/customers-auth.model';

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customers) private customers: typeof Customers) {}

  async getUser(userId: string) {
    const res = await this.customers.findOne({ where: { id: userId }, attributes: { exclude: ['id'] } });

    return res;
  }
}
