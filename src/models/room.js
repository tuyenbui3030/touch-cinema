'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Room.init({
    name: DataTypes.STRING,
    cinemaId: DataTypes.INTEGER,
    typeRoomId: DataTypes.INTEGER,
    row: DataTypes.INTEGER,
    col: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};