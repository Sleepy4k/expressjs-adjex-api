import { faker } from "@faker-js/faker";

export default {
  up() {
    const categories = [...Array(3)].map((_) => ({
      name: faker.name.firstName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return categories;
  },

  down() {
    return null;
  },
};

// Path: database\factories\20230208010248-seed-categories.cjs
