require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME || "root",
    password: process.env.DEV_DB_PASSWORD || "",
    database: process.env.DEV_DB_NAME || "quizapi",
    host: process.env.DEV_DB_HOSTNAME || "localhost",
    port: process.env.DEV_DB_PORT || 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.DEV_DB_USERNAME || "root",
    password: process.env.DEV_DB_PASSWORD || "",
    database: process.env.DEV_DB_NAME || "quizapi",
    host: process.env.DEV_DB_HOSTNAME || "localhost",
    port: process.env.DEV_DB_PORT || 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.DEV_DB_USERNAME || "root",
    password: process.env.DEV_DB_PASSWORD || "",
    database: process.env.DEV_DB_NAME || "quizapi",
    host: process.env.DEV_DB_HOSTNAME || "localhost",
    port: process.env.DEV_DB_PORT || 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};

// Path: config\database.config.cjs
