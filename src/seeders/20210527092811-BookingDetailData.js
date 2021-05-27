"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const date = new Date();
    const data = [
      {
        ticketId: "9b52a2c6-1111-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992b",
        createdAt: date,
        updatedAt: date,
      },
      {
        ticketId: "9b52a2c6-1112-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992b",
        createdAt: date,
        updatedAt: date,
      },
      {
        ticketId: "9b52a2c6-1113-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992b",
        createdAt: date,
        updatedAt: date,
      },
      {
        ticketId: "9b52a2c6-1114-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992c",
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("BookingDetails", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("BookingDetails", null, {});
  },
};
