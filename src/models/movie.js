"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      openingDay: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trailer: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      time: {
        type: DataTypes.INTEGER,
      },
      sold: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
