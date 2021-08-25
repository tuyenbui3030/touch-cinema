"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cinema, { foreignKey: "cinemaId" });
      this.belongsTo(models.Typeroom, { foreignKey: "typeRoomId" });

      this.belongsToMany(models.Movie, {
        // through: "Showtime",
        // foreignKey: "movieId",
        // unique: false,
        through: { model: models.Showtime, unique: false },
        // foreignKey: "movieId",
        foreignKey: "roomId",
      });

      this.hasMany(models.Showtime, { foreignKey: "roomId" });
    }
  }
  Room.init(
    {
      name: DataTypes.STRING,
      cinemaId: DataTypes.INTEGER,
      typeRoomId: DataTypes.INTEGER,
      row: DataTypes.INTEGER,
      col: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
