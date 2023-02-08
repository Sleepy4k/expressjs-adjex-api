"use strict";

const faker = require("faker");

/** @type {import('faker')} */
module.exports = {
  async up() {
    const quizzes = [...Array(3)].map((_) => ({
      question: faker.name.findName(),
      a: faker.name.findName(),
      b: faker.name.findName(),
      c: faker.name.findName(),
      d: faker.name.findName(),
      answer: "a",
      categoryId: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
      levelId: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return quizzes;
  },

  async down() {
    return null;
  },
};
