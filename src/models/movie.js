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
      this.belongsToMany(models.Cinema, {
        through: "CinemaMovie",
        foreignKey: "movieId",
        unique: false,
        onDelete: "cascade",
      });
      this.belongsToMany(models.Room, {
        // through: "Showtime",
        // foreignKey: "roomId",
        // unique: false,
        through: { model: models.Showtime, unique: false },
        // foreignKey: "roomId",
        foreignKey: "movieId",
      });
      this.hasMany(models.MoviePhoto, {
        foreignKey: "movieId",
        onDelete: "cascade",
      });
    }
  }
  Movie.init(
    {
      unsignedName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
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
