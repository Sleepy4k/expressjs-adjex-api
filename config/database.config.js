require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME || "oxcoqotjqyflvy",
    password: process.env.DEV_DB_PASSWORD || "5d7939a1c8cac3765cfaf98d39475bea39a85ec28bb7d1e09fb8ff8af336eca3",
    database: process.env.DEV_DB_NAME || "dccnranh6aslrq",
    host: process.env.DEV_DB_HOSTNAME || "ec2-3-93-160-246.compute-1.amazonaws.com",
    port: process.env.DEV_DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.CI_DB_USERNAME || "root",
    password: process.env.CI_DB_PASSWORD || "",
    database: process.env.CI_DB_NAME || "adjex",
    host: process.env.CI_DB_HOSTNAME || "localhost",
    port: process.env.CI_DB_PORT || 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.PROD_DB_USERNAME || "root",
    password: process.env.PROD_DB_PASSWORD || "",
    database: process.env.PROD_DB_NAME || "adjex",
    host: process.env.PROD_DB_HOSTNAME || "localhost",
    port: process.env.PROD_DB_PORT || 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
