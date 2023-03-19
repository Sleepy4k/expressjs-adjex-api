import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

export function up() {
  let users = [];

  for (let i = 0; i < 3; i++) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      userName: faker.internet.userName(),
      password: bcrypt.hashSync(faker.word.adjective(), 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return users;
}

export function down() {
  return null;
}

// Path: database\factories\20230210183740-seed-users.cjs
