'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
      defaultValue: 'default@email.com'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert to the previous state (without default value)
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
      // Remove the defaultValue attribute
    });
  }
};
