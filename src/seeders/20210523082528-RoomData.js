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
        name: "Medium-1",
        cinemaId: 1,
        typeRoomId: 1,
        row: 5,
        col: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Medium-2",
        cinemaId: 1,
        typeRoomId: 2,
        row: 7,
        col: 15,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Prenium-1",
        cinemaId: 1,
        typeRoomId: 3,
        row: 10,
        col: 15,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Medium-1",
        cinemaId: 2,
        typeRoomId: 1,
        row: 5,
        col: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Medium-2",
        cinemaId: 2,
        typeRoomId: 2,
        row: 6,
        col: 13,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Prenium-1",
        cinemaId: 2,
        typeRoomId: 2,
        row: 7,
        col: 12,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Prenium-2",
        cinemaId: 2,
        typeRoomId: 3,
        row: 5,
        col: 13,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Medium-1",
        cinemaId: 3,
        typeRoomId: 1,
        row: 5,
        col: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Medium-2",
        cinemaId: 3,
        typeRoomId: 2,
        row: 7,
        col: 14,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Prenium-1",
        cinemaId: 3,
        typeRoomId: 3,
        row: 7,
        col: 14,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "Prenium-2",
        cinemaId: 3,
        typeRoomId: 3,
        row: 5,
        col: 16,
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("Rooms", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Rooms", null, {});
  },
};
