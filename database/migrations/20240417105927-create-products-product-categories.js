'use strict';

const { productsTableName, productsColumns } = require('./20240417063300-create-products');
const { productCategoriesTableName, productCategoriesColumns } = require('./20240417105329-create-product-categories');

const productsProductCategoriesTableName = 'products_product_categories';
const productsProductCategoriesColumns = {
  id: 'id',
  product_id: 'product_id',
  product_category_id: 'product_category_id',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(productsProductCategoriesTableName, {
      [productsProductCategoriesColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [productsProductCategoriesColumns.product_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productsTableName,
          key: productsColumns.id,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      [productsProductCategoriesColumns.product_category_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productCategoriesTableName,
          key: productCategoriesColumns.id,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(productsProductCategoriesTableName);
  },
  productsProductCategoriesTableName,
  productsProductCategoriesColumns,
};
