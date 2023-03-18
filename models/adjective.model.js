import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Adjective extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {object} models
     */
    static associate(models) {
      Adjective.hasMany(models.quiz, {
        foreignKey: "adjectiveId",
        as: "quizzes",
      });
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
      tableName: "adjectives",
    }
  );
  return Adjective;
};

// Path: models\adjective.model.js
