import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.model';
import { ProductModifiers } from '../product-modifiers/product-modifiers.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products) private products: typeof Products) {}

  async getAll() {
    const res = await this.products.findAll({ include: [{ model: ProductModifiers, through: { attributes: [] } }] });
    return res;
  }
}
