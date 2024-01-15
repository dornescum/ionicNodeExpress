'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true, // or false, depending on your requirements
      unique: true, // if you want the email to be unique
      validate: {
        isEmail: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'email');
  }
};
