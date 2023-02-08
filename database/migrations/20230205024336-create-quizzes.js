"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("quizzes", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      a: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      b: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      c: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      d: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      answer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      levelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("quizzes");
  },
};
