"use strict";

const factories = require("../factories/20230208010223-seed-quizzes");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("quizzes", factories.up());
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quizzes", factories.down(), {});
  },
};
