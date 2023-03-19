import { faker } from "@faker-js/faker";

export function up() {
  let categories = [];

  for (let i = 0; i < 3; i++) {
    categories.push({
      name: faker.name.firstName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return categories;
}

export function down() {
  return null;
}

// Path: database\factories\20230208010248-seed-categories.cjs
