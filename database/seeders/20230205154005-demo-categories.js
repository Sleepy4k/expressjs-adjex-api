"use strict";

const factories = require("../factories/20230208010248-seed-categories");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", factories.up(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", factories.down(), {});
  },
};
