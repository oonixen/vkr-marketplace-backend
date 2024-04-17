'use strict';

const productImagesTableName = 'product_images';
const productImagesColumns = {
  id: 'id',
  link: 'link',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(productImagesTableName, {
      [productImagesColumns.id]: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      [productImagesColumns.link]: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(productImagesTableName);
  },
  productImagesTableName,
  productImagesColumns,
};
