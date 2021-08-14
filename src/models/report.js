'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
    }
  }
  Report.init(
    {
      year: DataTypes.INTEGER,
      month: DataTypes.INTEGER,
      data: DataTypes.JSONB,
      isLocked: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Report',
    }
  );
  return Report;
};
