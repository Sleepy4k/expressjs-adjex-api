import { up, down } from "../factories/20230210183740-seed-users.cjs";

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", up(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", down(), {});
  },
};

// Path: database\seeders\20230210183740-demo-users.cjs
