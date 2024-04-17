'use strict';

const { storesTableName, storesColumns } = require('./20240416172048-create-stores');
const { customersTableName, customersColumns } = require('./20240416092052-create-customers');

const ordersTableName = 'orders';
const ordersColumns = {
  id: 'id',
  customer_id: 'customer_id',
  store_id: 'store_id',
  comment: 'comment',
  price: 'price',
  date: 'date',
  is_received: 'is_received',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(ordersTableName, {
      [ordersColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [ordersColumns.customer_id]: {
        type: Sequelize.DataTypes.BIGINT,
        references: {
          model: customersTableName,
          key: customersColumns.id,
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      [ordersColumns.store_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: storesTableName,
          key: storesColumns.id,
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      [ordersColumns.comment]: {
        type: Sequelize.DataTypes.STRING,
      },
      [ordersColumns.price]: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      [ordersColumns.date]: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      [ordersColumns.is_received]: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(ordersTableName);
  },
  ordersColumns,
  ordersTableName,
};
