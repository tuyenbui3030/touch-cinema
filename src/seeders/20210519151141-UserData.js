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
      // {
      //   facebookId: "2940568766184344",
      //   fullname: "Bùi Quang Tuyến",
      //   phone: "0836988085",
      //   email: "tuyenstacks@gmail.com",
      //   password:
      //     "$2a$08$8PNz4mIw7PRdfT5xhfLD6eQLjOMrDlWuJW9huGCDdRpH4hzgdY.ve",
      //   role: 0,
      //   verified: true,
      //   token:
      //     "Sc0HBCSESNVB0qEGy7Yy63HMvHmm4XO3GlNrCHsiPkTpdjJZNmnM7onwSTkee6Eo0gpbjpcP6UIAX5B2cPzj3ji7HFSNSrB9kvMV",
      //   createdAt: date,
      //   updatedAt: date,
      // },
      {
        fullname: "Admin",
        phone: "0338218373",
        email: "admin@admin.com",
        password:
          "$2a$08$PXtnaBjB4OjgqMh0FRAhSOedkbO.FSrS9hJECD0CiAXqRa8u9c172",
        role: 1,
        verified: true,
        token:
          "3z9XEtOMf5gkUWU3Yzt1Rj6NRnrryz1LUxcknmtBhYrDYCyh56QmzfF61L0BCi1FOygjmPQwUFDFjnY7y7RRH2MbORGX50r6dNOz",
        createdAt: date,
        updatedAt: date,
      },
      {
        fullname: "Bùi Quang Tuyến",
        phone: "0836988086",
        email: "test@gmail.com",
        password:
          "$2a$08$PXtnaBjB4OjgqMh0FRAhSOedkbO.FSrS9hJECD0CiAXqRa8u9c172",
        role: 0,
        verified: true,
        token:
          "3z9XEtOMf5gkUWU3Yzt1Rj6NRnrryz1LUxcknmtBhYrDYCyh56QmzfF61L0BCi1FOygjmPQwUFDFjnY7y7RRH2MbORGX50r6dNOz",
        createdAt: date,
        updatedAt: date,
      },
    ];
    await queryInterface.bulkInsert("Users", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
