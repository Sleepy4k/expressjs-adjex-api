import { faker } from "@faker-js/faker";

export default {
  up() {
    const adjectives = [...Array(3)].map((_) => ({
      name: faker.name.firstName(),
      description: faker.lorem.paragraph(),
      example: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return adjectives;
  },

  down() {
    return null;
  },
};

// Path: database\factories\20230210183734-seed-adjectives.cjs
