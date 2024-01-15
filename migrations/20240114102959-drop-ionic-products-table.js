'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Drop the ionic_products table
    await queryInterface.dropTable('ionic_products');
  },

  async down (queryInterface, Sequelize) {
    // Recreate the ionic_products table if necessary.
    // You can copy the structure from the original migration file or leave this empty if you do not want to provide a way to revert this migration.
  }
};
