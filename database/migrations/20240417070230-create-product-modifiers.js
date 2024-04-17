'use strict';

const productModifiersTableName = 'product_modifiers';
const productModifiersColumns = {
  id: 'id',
  name: 'name',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(productModifiersTableName, {
      [productModifiersColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [productModifiersColumns.name]: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(productModifiersTableName);
  },
  productModifiersTableName,
  productModifiersColumns,
};
