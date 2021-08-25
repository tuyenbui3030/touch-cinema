"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MoviePhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Movie, { foreignKey: "movieId" });

      // define association here
    }
  }
  MoviePhoto.init(
    {
      name: DataTypes.STRING,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MoviePhoto",
    }
  );
  return MoviePhoto;
};
