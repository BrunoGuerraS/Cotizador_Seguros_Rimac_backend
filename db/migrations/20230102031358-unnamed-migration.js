'use strict';

const { CLIENT_TABLE, ClientSchema} = require('../models/client.model')
const { CAR_TABLE, CarSchema} = require('../models/car.model')
const { PROMO_TABLE, PromotSchema} = require('../models/promo.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable(CLIENT_TABLE, ClientSchema)
     await queryInterface.createTable(CAR_TABLE, CarSchema)
     await queryInterface.createTable(PROMO_TABLE, PromotSchema)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
