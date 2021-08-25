"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

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
      this.hasMany(models.Booking, {
        foreignKey: "showtimeId",
        onDelete: "cascade",
      });
      this.hasMany(models.Cart, {
        foreignKey: "showtimeId",
        onDelete: "cascade",
      });
    }
  }
  Showtime.init(
    {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      movieId: {
        type: DataTypes.INTEGER,
      },
      roomId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      slot: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      timeStart: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      timeEnd: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      price: DataTypes.FLOAT,
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["roomId", "movieId", "timeStart"],
        },
      ],
      sequelize,
      modelName: "Showtime",
    }
  );
  return Showtime;
};
