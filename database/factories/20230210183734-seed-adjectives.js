"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
  up() {
    const categories = [...Array(3)].map((_) => ({
      name: faker.name.firstName(),
      description: faker.lorem.paragraph(),
      example: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return categories;
  },

  down() {
    return null;
  },
};
