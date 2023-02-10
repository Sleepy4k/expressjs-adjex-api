"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
  up() {
    const quizzes = [...Array(3)].map((_) => ({
      question: faker.random.words(5) + "?",
      a: faker.random.word(),
      b: faker.random.word(),
      c: faker.random.word(),
      d: faker.random.word(),
      answer: "a",
      categoryId: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
      levelId: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
      adjectiveId: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return quizzes;
  },

  down() {
    return null;
  },
};
