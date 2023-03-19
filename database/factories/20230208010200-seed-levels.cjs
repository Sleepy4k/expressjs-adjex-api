import { faker } from "@faker-js/faker";

export function up() {
  let levels = [];

  for (let i = 0; i < 3; i++) {
    levels.push({
      name: faker.name.firstName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return levels;
}

export function down() {
  return null;
}

// Path: database\factories\20230208010200-seed-levels.cjs
