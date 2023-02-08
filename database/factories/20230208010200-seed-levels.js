"use strict";

const faker = require("faker");

/** @type {import('faker')} */
module.exports = {
  async up() {
    const levels = [...Array(3)].map((_) => ({
      name: faker.name.findName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return levels;
  },

  async down() {
    return null;
  },
};
