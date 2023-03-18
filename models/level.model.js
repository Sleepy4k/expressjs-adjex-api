import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Level.hasMany(models.quiz, {
        foreignKey: "levelId",
        as: "quizzes",
      });
    }
  }
  Level.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Level must not be empty" } },
      },
    },
    {
      sequelize,
      modelName: "level",
      tableName: "levels",
    }
  );
  return Level;
};

// Path: models\level.model.js
