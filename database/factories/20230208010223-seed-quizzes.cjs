import { faker } from "@faker-js/faker";

export function up() {
  let quizzes = [];

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < 3; i++) {
    quizzes.push({
      question: faker.random.words(5) + "?",
      a: faker.random.word(),
      b: faker.random.word(),
      c: faker.random.word(),
      d: faker.random.word(),
      answer: "a",
      categoryId: randomNumber(1, 3),
      levelId: randomNumber(1, 3),
      adjectiveId: randomNumber(1, 3),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return quizzes;
}

export function down() {
  return null;
}

// Path: database\factories\20230208010223-seed-quizzes.cjs
