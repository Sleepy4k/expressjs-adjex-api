import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Title must not be empty" } },
      },
      description: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "Description must not be empty" } },
      },
    },
    {
      sequelize,
      modelName: "report",
      tableName: "reports",
    }
  );
  return Report;
};

// Path: models\report.model.js
