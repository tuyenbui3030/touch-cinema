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
        id: "9b52a2c6-4558-46de-ae71-485d8b17992b",
        userId: 1,
        showtimeId: "9b52a2c6-4558-46de-ae71-485d8b17949a",
        bookingTime: date,
        total: 100000,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-4558-46de-ae71-485d8b17992c",
        userId: 2,
        showtimeId: "9b52a2c6-4558-46de-ae71-485d8b17949a",
        bookingTime: date,
        total: 100000,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-4558-46de-ae71-485d8b17992d",
        userId: 1,
        showtimeId: "9b52a2c6-4558-46de-ae71-485d8b17949a",
        bookingTime: date,
        total: 100000,
        createdAt: date,
        updatedAt: date,
      },
      {
        id: "9b52a2c6-4558-46de-ae71-485d8b17992e",
        userId: 2,
        showtimeId: "9b52a2c6-4558-46de-ae71-485d8b17949a",
        bookingTime: date,
        total: 100000,
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("Bookings", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Bookings", null, {});
  },
};
