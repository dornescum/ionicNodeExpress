'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Drop the existing table
    await queryInterface.dropTable('ionic_products');

    // Recreate the table with the tag as an INTEGER
    await queryInterface.createTable('ionic_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tag: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      flashSale: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      img: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('ionic_products');
  }
};
