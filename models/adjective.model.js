"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Adjective extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Adjective.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Adjective must not be empty" } },
      },
      description: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Description must not be empty" } },
      },
      example: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Example must not be empty" } },
      },
    },
    {
      sequelize,
      modelName: "adjective",
    }
  );
  return Adjective;
};
