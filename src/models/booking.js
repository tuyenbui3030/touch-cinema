"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "userId" });

      this.belongsTo(models.Showtime, {
        foreignKey: "showtimeId",
        onDelete: "cascade",
      });
      this.hasMany(models.Ticket, {
        foreignKey: "bookingId",
        onDelete: "cascade",
      });
    }
  }
  Booking.init(
    {
      // uuid: DataTypes.UUID,
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      userId: DataTypes.INTEGER,
      showtimeId: DataTypes.UUID,
      bookingTime: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      total: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
