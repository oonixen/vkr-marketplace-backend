'use strict';

const productsTableName = 'products';
const productsColumns = {
  id: 'id',
  name: 'name',
  info: 'info',
  price: 'price',
  amount: 'amount',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(productsTableName, {
      [productsColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [productsColumns.name]: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      [productsColumns.info]: {
        type: Sequelize.DataTypes.STRING,
      },
      [productsColumns.price]: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      [productsColumns.amount]: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(productsTableName);
  },
  productsColumns,
  productsTableName,
};
