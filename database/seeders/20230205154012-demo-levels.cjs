import { up, down } from "../factories/20230208010200-seed-levels.cjs";

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("levels", up(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("levels", down(), {});
  },
};

// Path: database\seeders\20230205154012-demo-levels.cjs
