"use strict";

const factories = require("../factories/20230210183734-seed-adjectives");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("adjectives", factories.up(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("adjectives", factories.down(), {});
  },
};
