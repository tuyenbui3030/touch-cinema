"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Booking, {
        through: { model: models.BookingDetail },
        // foreignKey: "bookingId",
        foreignKey: "ticketId", // test
      });
    }
  }
  Ticket.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      bookingId: DataTypes.UUID,
      seat: DataTypes.STRING,
      rowAddress: DataTypes.STRING,
      colAddress: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
