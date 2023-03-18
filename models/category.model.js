import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.quiz, {
        foreignKey: "categoryId",
        as: "quizzes",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Category must not be empty" } },
      },
    },
    {
      sequelize,
      modelName: "category",
      tableName: "categories",
    }
  );
  return Category;
};

// Path: models\category.model.js
