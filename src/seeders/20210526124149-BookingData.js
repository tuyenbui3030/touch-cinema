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
        id: "f4973a6f-a3b2-4d7f-936c-2ff9be75fa73",
        userId: 1,
        showtimeId: "f544a2ce-71eb-4f40-94ec-1e0307a54748",
        bookingTime: "2021-08-25T16:12:47.396Z",
        status: true,
        total: 20,
        createdAt: "2021-08-25T16:12:47.398Z",
        updatedAt: "2021-08-25T16:15:58.030Z",
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
