'use strict';

const tableName = 'customers';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      phone: {
        type: Sequelize.DataTypes.STRING(12),
        unique: true,
        allowNull: false,
      },
      balance: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(tableName);
  },
};
