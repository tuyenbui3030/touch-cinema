'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Showtime.init({
    movieId: DataTypes.INTEGER,
    cinemaId: DataTypes.INTEGER,
    timeStart: DataTypes.DATE,
    timeEnd: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Showtime',
  });
  return Showtime;
};