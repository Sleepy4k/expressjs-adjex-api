"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quiz.init(
    {
      question: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Question must not be empty" } },
      },
      a: {
        type: DataTypes.STRING,
      },
      b: {
        type: DataTypes.STRING,
      },
      c: {
        type: DataTypes.STRING,
      },
      d: {
        type: DataTypes.STRING,
      },
      answer: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Answer must not be empty" } },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: { msg: "Category must not be empty" } },
        references: {
          model: "categories",
          key: "id",
        },
      },
      levelId: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: { msg: "Level must not be empty" } },
        references: {
          model: "levels",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Quiz",
      tableName: "quizzes",
    }
  );
  return Quiz;
};
