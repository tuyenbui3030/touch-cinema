"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CinemaPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cinema, { foreignKey: "cinemaId" });

      // define association here
    }
  }
  CinemaPhoto.init(
    {
      name: DataTypes.STRING,
      cinemaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CinemaPhoto",
    }
  );
  return CinemaPhoto;
};
