'use strict';

const { productsTableName, productsColumns } = require('./20240417063300-create-products');
const { productModifiersTableName, productModifiersColumns } = require('./20240417070230-create-product-modifiers');

const productsProductModifiersTableName = 'products_product_modifiers';
const productsProductModifiersColumns = {
  id: 'id',
  product_id: 'product_id',
  product_modifier_id: 'product_modifier_id',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(productsProductModifiersTableName, {
      [productsProductModifiersColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [productsProductModifiersColumns.product_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productsTableName,
          key: productsColumns.id,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      [productsProductModifiersColumns.product_modifier_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productModifiersTableName,
          key: productModifiersColumns.id,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(productsProductModifiersTableName);
  },
  productsProductModifiersTableName,
  productsProductModifiersColumns,
};
