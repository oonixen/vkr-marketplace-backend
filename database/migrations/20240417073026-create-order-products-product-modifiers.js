'use strict';

const { orderProductsTableName, orderProductsColumns } = require('./20240417063839-create-order-products');
const { productModifiersTableName, productModifiersColumns } = require('./20240417070230-create-product-modifiers');

const orderProductsProductModifiersTableName = 'order_products_product_modifiers';
const orderProductsProductModifiersColumns = {
  id: 'id',
  order_product_id: 'order_product_id',
  product_modifier_id: 'product_modifier_id',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(orderProductsProductModifiersTableName, {
      [orderProductsProductModifiersColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [orderProductsProductModifiersColumns.order_product_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: orderProductsTableName,
          key: orderProductsColumns.id,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      [orderProductsProductModifiersColumns.product_modifier_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productModifiersTableName,
          key: productModifiersColumns.id,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(orderProductsProductModifiersTableName);
  },
  orderProductsProductModifiersTableName,
  orderProductsProductModifiersColumns,
};
