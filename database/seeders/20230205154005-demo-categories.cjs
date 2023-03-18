import { up, down } from "../factories/20230208010248-seed-categories.cjs";

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", up(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", down(), {});
  },
};

// Path: database\seeders\20230205154005-demo-categories.cjs
