"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Room, {
        foreignKey: "cinemaId",
        onDelete: "cascade",
      });

      this.belongsToMany(models.Movie, {
        through: "CinemaMovie",
        foreignKey: "cinemaId",
      });
      this.hasMany(models.CinemaPhoto, {
        foreignKey: "cinemaId",
        onDelete: "cascade",
      });
      //test
    }
  }
  Cinema.init(
    {
      unsignedName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
