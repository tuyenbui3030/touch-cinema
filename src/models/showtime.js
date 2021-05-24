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
      movieId: {
        type: DataTypes.INTEGER,
      },
      roomId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      timeStart: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.DATE,
      },
      timeEnd: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.DATE,
      },
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Showtime",
    }
  );
  return Showtime;
};
