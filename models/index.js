/**
 * Import Dotenv.
 */
import "dotenv/config.js";

/**
 * Module dependencies.
 */
import Sequelize from "sequelize";
import { env } from "../config/app.config.js";
import database from "../config/database.config.cjs";

/**
 * Define database connection.
 */
const { development, test, production } = database;

/**
 * Define model list.
 */
import User from "./user.model.js";
import Quiz from "./quiz.model.js";
import Level from "./level.model.js";
import Report from "./report.model.js";
import Category from "./category.model.js";
import Adjective from "./adjective.model.js";

/**
 * Database connection.
 */
const connection =
  env === "development" ? development : env === "test" ? test : production;

/**
 * Initialize database connection.
 */
const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  {
    host: connection.host,
    port: connection.port,
    dialect: connection.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

/**
 * Initialize database models.
 */
const db = {};

/**
 * Import database models.
 */
db.user = User(sequelize, Sequelize.DataTypes);
db.quiz = Quiz(sequelize, Sequelize.DataTypes);
db.level = Level(sequelize, Sequelize.DataTypes);
db.report = Report(sequelize, Sequelize.DataTypes);
db.category = Category(sequelize, Sequelize.DataTypes);
db.adjective = Adjective(sequelize, Sequelize.DataTypes);

/**
 * Associate database models.
 */
db.user.associate(db);
db.quiz.associate(db);
db.level.associate(db);
db.report.associate(db);
db.category.associate(db);
db.adjective.associate(db);

/**
 * Export database models.
 */
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;

// Path: models\index.js
