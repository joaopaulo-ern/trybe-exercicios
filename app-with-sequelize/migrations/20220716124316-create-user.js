'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userTable = queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    return userTable;
  },
  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('Users');
  }
};