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
        id: "70f0d4d7-0e8b-46ab-a45e-b2473ff7b928",
        bookingId: "f4973a6f-a3b2-4d7f-936c-2ff9be75fa73",
        seat: "c7",
        rowAddress: "c",
        colAddress: "7",
        price: 10,
        createdAt: "2021-08-25T16:12:47.412Z",
        updatedAt: "2021-08-25T16:12:47.412Z",
      },
      {
        id: "3b34b83b-839a-4198-91f3-7f8295cfe26c",
        bookingId: "f4973a6f-a3b2-4d7f-936c-2ff9be75fa73",
        seat: "c8",
        rowAddress: "c",
        colAddress: "8",
        price: 10,
        createdAt: "2021-08-25T16:12:47.412Z",
        updatedAt: "2021-08-25T16:12:47.412Z",
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
