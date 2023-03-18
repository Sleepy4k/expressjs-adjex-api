import { up, down } from "../factories/20230210183734-seed-adjectives.cjs";

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("adjectives", up(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("adjectives", down(), {});
  },
};

// Path: database\seeders\20230210183734-demo-adjectives.cjs
