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
        id: "9b52a2c6-1111-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992b",
        seat: "b3",
        rowAddress: "b",
        colAddress: "3",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-1112-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992b",
        seat: "b4",
        rowAddress: "b",
        colAddress: "4",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-1113-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992b",
        seat: "b5",
        rowAddress: "b",
        colAddress: "5",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-1114-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992c",
        seat: "b1",
        rowAddress: "b",
        colAddress: "1",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-1115-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992d",
        seat: "e2",
        rowAddress: "e",
        colAddress: "2",
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-1116-46de-ae71-485d8b17992b",
        bookingId: "9b52a2c6-4558-46de-ae71-485d8b17992e",
        seat: "e1",
        rowAddress: "e",
        colAddress: "1",
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("Tickets", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
