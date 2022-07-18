'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.addColumn('Users', 'phone_num', {
      type: sequelize.STRING,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.removeColumn('Users', 'phone_num');
  }
};
