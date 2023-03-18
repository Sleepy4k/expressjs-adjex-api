import { faker } from "@faker-js/faker";

export default {
  up() {
    const levels = [...Array(3)].map((_) => ({
      name: faker.name.firstName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return levels;
  },

  down() {
    return null;
  },
};

// Path: database\factories\20230208010200-seed-levels.cjs
