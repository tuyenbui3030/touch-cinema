"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookingDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Booking, { foreignKey: "bookingId" });
      this.belongsTo(models.Ticket, { foreignKey: "ticketId" });
      // this.belongsTo(models.Booking);
      // this.belongsTo(models.Ticket);
    }
  }
  BookingDetail.init(
    {
      bookingId: DataTypes.UUID,
      ticketId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "BookingDetail",
    }
  );
  return BookingDetail;
};
