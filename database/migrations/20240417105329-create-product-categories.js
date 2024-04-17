'use strict';

const productCategoriesTableName = 'product_categories';
const productCategoriesColumns = {
  id: 'id',
  name: 'name',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(productCategoriesTableName, {
      [productCategoriesColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [productCategoriesColumns.name]: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(productCategoriesTableName);
  },
  productCategoriesTableName,
  productCategoriesColumns,
};
