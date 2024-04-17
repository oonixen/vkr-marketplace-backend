'use strict';

const customersTableName = 'customers';
const customersColumns = {
  id: 'id',
  phone: 'phone',
  balance: 'balance',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(customersTableName, {
      [customersColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [customersColumns.phone]: {
        type: Sequelize.DataTypes.STRING(12),
        unique: true,
        allowNull: false,
      },
      [customersColumns.balance]: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(customersTableName);
  },
  customersColumns,
  customersTableName,
};
