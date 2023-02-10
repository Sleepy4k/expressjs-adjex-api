"use strict";

const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");

module.exports = {
  up() {
    const categories = [...Array(3)].map((_) => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      userName: faker.internet.userName(),
      password: bcrypt.hashSync(faker.word.adjective(), 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return categories;
  },

  down() {
    return null;
  },
};
