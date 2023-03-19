import { faker } from "@faker-js/faker";

export function up() {
  let adjectives = [];

  for (let i = 0; i < 3; i++) {
    adjectives.push({
      name: faker.name.firstName(),
      description: faker.lorem.paragraph(),
      example: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return adjectives;
}

export function down() {
  return null;
}

// Path: database\factories\20230210183734-seed-adjectives.cjs
