import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.model';
import { ProductModifiers } from '../product-modifiers/product-modifiers.model';
import { ProductCategories } from '../product-categories/product-categories.model';
import { ProductImages } from '../product-images/product-images.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(ProductCategories) private productCategoriesDb: typeof ProductCategories) {}

  async getAll() {
    let res = await this.productCategoriesDb.findAll({
      attributes: ['id', ['name', 'title']],
      include: [
        {
          model: Products,
          through: { attributes: [] },
          include: [
            {
              model: ProductModifiers,
              through: { attributes: [] },
            },
            {
              model: ProductImages,
              through: { attributes: [] },
            },
          ],
        },
      ],
    });

    return res;
  }
}
