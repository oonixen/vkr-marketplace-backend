'use strict';

const { productsTableName, productsColumns } = require('./20240417063300-create-products');
const { productImagesTableName, productImagesColumns } = require('./20240417115056-create-product-images');

const productsProductImagesTableName = 'products_product_images';
const productsProductImagesColumns = {
  id: 'id',
  product_id: 'product_id',
  product_image_id: 'product_image_id',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(productsProductImagesTableName, {
      [productsProductImagesColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [productsProductImagesColumns.product_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productsTableName,
          key: productsColumns.id,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      [productsProductImagesColumns.product_image_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productImagesTableName,
          key: productImagesColumns.id,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(productsProductImagesTableName);
  },
  productsProductImagesColumns,
  productsProductImagesTableName,
};
