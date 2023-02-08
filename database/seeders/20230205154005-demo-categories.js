"use strict";

const faker = require("../factories/20230208010200-seed-levels");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", faker.up, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", faker.down, {});
  },
};
