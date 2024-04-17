'use strict';

const storesTableName = 'stores';
const storesColumns = {
  id: 'id',
  name: 'name',
  address: 'address',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(storesTableName, {
      [storesColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [storesColumns.name]: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      [storesColumns.address]: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(storesTableName);
  },
  storesTableName,
  storesColumns,
};
