'use strict';

const { ordersTableName, ordersColumns } = require('./20240416172819-create-orders');
const { productsTableName, productsColumns } = require('./20240417063300-create-products');

const orderProductsTableName = 'order_products';
const orderProductsColumns = {
  id: 'id',
  order_id: 'order_id',
  product_id: 'product_id',
  amount: 'amount',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(orderProductsTableName, {
      [orderProductsColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [orderProductsColumns.order_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: ordersTableName,
          key: ordersColumns.id,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      [orderProductsColumns.product_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: productsTableName,
          key: productsColumns.id,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      [orderProductsColumns.amount]: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(orderProductsTableName);
  },
  orderProductsColumns,
  orderProductsTableName,
};
