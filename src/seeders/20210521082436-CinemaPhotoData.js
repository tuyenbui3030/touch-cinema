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
        name: "aeon-1.jpg",
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "aeon-2.jpg",
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "aeon-3.jpg",
        cinemaId: 1,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "nowzone-1.png",
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "nowzone-2.png",
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "nowzone-3.png",
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "nowzone-4.png",
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "nowzone-5.png",
        cinemaId: 2,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "centre-1.jpg",
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "centre-2.jpg",
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "centre-3.jpg",
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "centre-4.jpg",
        cinemaId: 3,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "vincom-1.png",
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "vincom-2.png",
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "vincom-3.png",
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "vincom-4.png",
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "vincom-5.png",
        cinemaId: 4,
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("CinemaPhotos", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("CinemaPhotos", null, {});
  },
};
