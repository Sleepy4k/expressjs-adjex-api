"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "First Name must not be empty" } },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Last Name must not be empty" } },
      },
      userName: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Username must not be empty" } },
      },
      password: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Password must not be empty" } },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
