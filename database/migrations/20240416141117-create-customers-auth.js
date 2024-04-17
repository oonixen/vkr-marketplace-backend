'use strict';
const { customersTableName, customersColumns } = require('./20240416092052-create-customers');

const customersAuthTableName = 'customers_auth';
const customersAuthColumns = {
  id: 'id',
  customer_id: 'customer_id',
  refresh_token: 'refresh_token',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(customersAuthTableName, {
      [customersAuthColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [customersAuthColumns.customer_id]: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: customersTableName,
          key: customersColumns.id,
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      [customersAuthColumns.refresh_token]: {
        type: Sequelize.DataTypes.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(customersAuthTableName);
  },
  customersAuthTableName,
  customersAuthColumns,
};
