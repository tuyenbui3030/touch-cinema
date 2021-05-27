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
      this.belongsTo(models.Showtime, { foreignKey: "showtimeId" });
      this.belongsToMany(models.Ticket, {
        through: { model: models.BookingDetail },
        // foreignKey: "ticketId",
        foreignKey: "bookingId", //test
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
      total: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
