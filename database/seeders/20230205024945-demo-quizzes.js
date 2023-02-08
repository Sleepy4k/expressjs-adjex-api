"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("quizzes", [
      {
        question: "Siapa nama presiden Indonesia saat ini?",
        a: "Joko Widodo",
        b: "Susilo Bambang Yudhoyono",
        c: "Megawati Soekarnoputri",
        d: "Soeharto",
        answer: "a",
        categoryId: 1,
        levelId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Siapa nama presiden Indonesia sebelum Joko Widodo?",
        a: "Joko Widodo",
        b: "Susilo Bambang Yudhoyono",
        c: "Megawati Soekarnoputri",
        d: "Soeharto",
        answer: "b",
        categoryId: 1,
        levelId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Siapa nama presiden Indonesia sebelum Susilo Bambang Yudhoyono?",
        a: "Joko Widodo",
        b: "Susilo Bambang Yudhoyono",
        c: "Megawati Soekarnoputri",
        d: "Soeharto",
        answer: "c",
        categoryId: 1,
        levelId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quizzes", null, {});
  },
};
