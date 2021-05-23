"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Movie, { foreignKey: "movieId" });
      this.belongsTo(models.Room, { foreignKey: "roomId" });
    }
  }
  Showtime.init(
    {
      movieId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
      timeStart: DataTypes.DATE,
      timeEnd: DataTypes.DATE,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Showtime",
    }
  );
  return Showtime;
};
