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
        name: "mat-biec-1.jpg",
        movieId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "mat-biec-2.jpg",
        movieId: 7,
        createdAt: date,
        updatedAt: date,
      },
      {
        name: "mat-biec-3.jpg",
        movieId: 7,
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("MoviePhotos", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MoviePhotos", null, {});
  },
};
