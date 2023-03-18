import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

export default {
  up() {
    const users = [...Array(3)].map((_) => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      userName: faker.internet.userName(),
      password: bcrypt.hashSync(faker.word.adjective(), 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return users;
  },

  down() {
    return null;
  },
};

// Path: database\factories\20230210183740-seed-users.cjs
