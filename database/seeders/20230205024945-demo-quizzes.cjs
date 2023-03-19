import { up, down } from "../factories/20230208010223-seed-quizzes.cjs";

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("quizzes", up(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quizzes", down(), {});
  },
};

// Path: database\seeders\20230205024945-demo-quizzes.cjs
