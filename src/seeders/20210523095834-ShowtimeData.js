"use strict";
const { v4: uuidv4 } = require("uuid");

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
    // const data = [
    //   {
    //     uuid: "9b52a2c6-4558-46de-ae71-485d8b17949a",
    //     movieId: 1,
    //     roomId: 1,
    //     slot: 1,
    //     timeStart: "2021-08-24 07:00:00.000+07",
    //     timeEnd: "2021-08-24 09:00:00.000+07",
    //     price: 5,
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     uuid: uuidv4(),
    //     movieId: 1,
    //     roomId: 1,
    //     slot: 2,
    //     timeStart: "2021-08-24 09:00:00.000+07",
    //     timeEnd: "2021-08-24 11:00:00.000+07",
    //     price: 5,
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     uuid: uuidv4(),
    //     movieId: 1,
    //     roomId: 1,
    //     slot: 3,
    //     timeStart: "2021-08-24 11:00:00.000+07",
    //     timeEnd: "2021-08-24 13:00:00.000+07",
    //     price: 5,
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    // ];
    const data = [
        {
        "uuid": "9b52a2c6-4558-46de-ae71-485d8b17949a",
        "movieId": 1,
        "roomId": 1,
        "slot": 1,
        "timeStart": "2021-08-24T00:00:00.000Z",
        "timeEnd": "2021-08-24T02:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-01T09:17:41.664Z",
        "updatedAt": "2021-07-01T09:17:41.664Z"
        },
        {
        "uuid": "af9795c4-bc57-4d55-b90c-efea8bfea3aa",
        "movieId": 1,
        "roomId": 1,
        "slot": 2,
        "timeStart": "2021-08-24T02:00:00.000Z",
        "timeEnd": "2021-08-24T04:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-01T09:17:41.664Z",
        "updatedAt": "2021-07-01T09:17:41.664Z"
        },
        {
        "uuid": "edda5e64-61ad-4bfb-92a3-3691e128d65b",
        "movieId": 4,
        "roomId": 3,
        "slot": 2,
        "timeStart": "2021-08-13T02:00:00.000Z",
        "timeEnd": "2021-08-13T04:00:00.000Z",
        "price": 15,
        "createdAt": "2021-07-01T13:56:37.281Z",
        "updatedAt": "2021-07-01T13:56:37.281Z"
        },
        {
        "uuid": "d3c82c29-5876-456d-9328-8b6e4db558f5",
        "movieId": 1,
        "roomId": 2,
        "slot": 1,
        "timeStart": "2021-08-30T00:00:00.000Z",
        "timeEnd": "2021-08-30T02:00:00.000Z",
        "price": 10,
        "createdAt": "2021-07-18T04:46:24.981Z",
        "updatedAt": "2021-07-18T04:46:24.981Z"
        },
        {
        "uuid": "993c98a1-8258-4236-9f66-8016cb0c9a21",
        "movieId": 1,
        "roomId": 2,
        "slot": 2,
        "timeStart": "2021-08-30T02:00:00.000Z",
        "timeEnd": "2021-08-30T04:00:00.000Z",
        "price": 10,
        "createdAt": "2021-07-18T04:46:24.982Z",
        "updatedAt": "2021-07-18T04:46:24.982Z"
        },
        {
        "uuid": "de1b5d5e-bfbe-4888-bc08-a1acfb1e2c62",
        "movieId": 5,
        "roomId": 3,
        "slot": 1,
        "timeStart": "2021-08-06T00:00:00.000Z",
        "timeEnd": "2021-08-06T02:00:00.000Z",
        "price": 10,
        "createdAt": "2021-07-18T07:15:11.108Z",
        "updatedAt": "2021-07-18T07:15:11.108Z"
        },
        {
        "uuid": "977bcf3c-7648-46a0-9b49-ead9c0815100",
        "movieId": 4,
        "roomId": 3,
        "slot": 1,
        "timeStart": "2021-09-11T00:00:00.000Z",
        "timeEnd": "2021-09-11T02:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:53:32.991Z",
        "updatedAt": "2021-07-18T07:53:32.991Z"
        },
        {
        "uuid": "2955659a-4a84-442a-8e8f-96d55a7a4df0",
        "movieId": 4,
        "roomId": 3,
        "slot": 4,
        "timeStart": "2021-09-11T06:00:00.000Z",
        "timeEnd": "2021-09-11T08:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:53:32.991Z",
        "updatedAt": "2021-07-18T07:53:32.991Z"
        },
        {
        "uuid": "48d2f841-6a80-40cc-8e1a-19457809bd08",
        "movieId": 4,
        "roomId": 3,
        "slot": 7,
        "timeStart": "2021-09-11T12:00:00.000Z",
        "timeEnd": "2021-09-11T14:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:53:32.992Z",
        "updatedAt": "2021-07-18T07:53:32.992Z"
        },
        {
        "uuid": "cb35d663-45b8-4f9c-9f55-30a8d9932d59",
        "movieId": 5,
        "roomId": 1,
        "slot": 2,
        "timeStart": "2021-09-10T02:00:00.000Z",
        "timeEnd": "2021-09-10T04:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:54:14.941Z",
        "updatedAt": "2021-07-18T07:54:14.941Z"
        },
        {
        "uuid": "093b2a26-a590-4b1e-827f-dacd94eb8e4b",
        "movieId": 5,
        "roomId": 1,
        "slot": 6,
        "timeStart": "2021-09-10T10:00:00.000Z",
        "timeEnd": "2021-09-10T12:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:54:14.942Z",
        "updatedAt": "2021-07-18T07:54:14.942Z"
        },
        {
        "uuid": "00dd3ea0-baaa-48e8-b698-064ad90c5dff",
        "movieId": 11,
        "roomId": 2,
        "slot": 7,
        "timeStart": "2021-07-31T12:00:00.000Z",
        "timeEnd": "2021-07-31T14:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:54:37.045Z",
        "updatedAt": "2021-07-18T07:54:37.045Z"
        },
        {
        "uuid": "465dad62-72c0-4a5f-9426-62eb60e1ce2f",
        "movieId": 11,
        "roomId": 2,
        "slot": 8,
        "timeStart": "2021-07-31T14:00:00.000Z",
        "timeEnd": "2021-07-31T16:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:54:37.046Z",
        "updatedAt": "2021-07-18T07:54:37.046Z"
        },
        {
        "uuid": "4b011113-6187-4743-959f-98e162a19864",
        "movieId": 7,
        "roomId": 2,
        "slot": 3,
        "timeStart": "2021-09-04T04:00:00.000Z",
        "timeEnd": "2021-09-04T06:00:00.000Z",
        "price": 2,
        "createdAt": "2021-07-18T07:55:18.270Z",
        "updatedAt": "2021-07-18T07:55:18.270Z"
        },
        {
        "uuid": "40a89c89-f5a2-4140-a6bc-abfa32217e3d",
        "movieId": 9,
        "roomId": 2,
        "slot": 6,
        "timeStart": "2021-09-15T10:00:00.000Z",
        "timeEnd": "2021-09-15T12:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:55:49.251Z",
        "updatedAt": "2021-07-18T07:55:49.251Z"
        },
        {
        "uuid": "930f4937-f007-4d2f-9b16-4d66a179acbb",
        "movieId": 1,
        "roomId": 4,
        "slot": 3,
        "timeStart": "2021-08-20T04:00:00.000Z",
        "timeEnd": "2021-08-20T06:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:58:04.291Z",
        "updatedAt": "2021-07-18T07:58:04.291Z"
        },
        {
        "uuid": "3e277c84-05ac-4c91-aa67-9903eca82110",
        "movieId": 5,
        "roomId": 5,
        "slot": 3,
        "timeStart": "2021-07-23T04:00:00.000Z",
        "timeEnd": "2021-07-23T06:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:58:21.513Z",
        "updatedAt": "2021-07-18T07:58:21.513Z"
        },
        {
        "uuid": "dac69bb1-7497-4e08-8ceb-eebefc72e9c5",
        "movieId": 3,
        "roomId": 6,
        "slot": 2,
        "timeStart": "2021-08-30T02:00:00.000Z",
        "timeEnd": "2021-08-30T04:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:58:37.322Z",
        "updatedAt": "2021-07-18T07:58:37.322Z"
        },
        {
        "uuid": "b7ce4e13-fd70-46a9-811f-23e5a01eee38",
        "movieId": 5,
        "roomId": 5,
        "slot": 3,
        "timeStart": "2021-10-08T04:00:00.000Z",
        "timeEnd": "2021-10-08T06:00:00.000Z",
        "price": 3,
        "createdAt": "2021-07-18T07:59:01.085Z",
        "updatedAt": "2021-07-18T07:59:01.085Z"
        },
        {
        "uuid": "0e1309cd-f3dd-4724-a584-3021b84a3276",
        "movieId": 5,
        "roomId": 7,
        "slot": 2,
        "timeStart": "2021-08-10T02:00:00.000Z",
        "timeEnd": "2021-08-10T04:00:00.000Z",
        "price": 5,
        "createdAt": "2021-07-18T07:59:40.664Z",
        "updatedAt": "2021-07-18T07:59:40.664Z"
        },
        {
        "uuid": "83bb223a-5d02-40dd-9d6c-2a8bc504fbc1",
        "movieId": 10,
        "roomId": 7,
        "slot": 3,
        "timeStart": "2021-08-27T04:00:00.000Z",
        "timeEnd": "2021-08-27T06:00:00.000Z",
        "price": 10,
        "createdAt": "2021-07-18T08:00:17.512Z",
        "updatedAt": "2021-07-18T08:00:17.512Z"
        },
        {
        "uuid": "7419650e-7a52-4615-bd78-ae699ec01331",
        "movieId": 11,
        "roomId": 5,
        "slot": 2,
        "timeStart": "2021-09-04T02:00:00.000Z",
        "timeEnd": "2021-09-04T04:00:00.000Z",
        "price": 10,
        "createdAt": "2021-07-18T08:00:43.945Z",
        "updatedAt": "2021-07-18T08:00:43.945Z"
        },
        {
        "uuid": "1c822160-3fb0-4213-9a08-a2b09a6bc1b5",
        "movieId": 10,
        "roomId": 5,
        "slot": 3,
        "timeStart": "2021-09-11T04:00:00.000Z",
        "timeEnd": "2021-09-11T06:00:00.000Z",
        "price": 7,
        "createdAt": "2021-07-18T08:01:13.986Z",
        "updatedAt": "2021-07-18T08:01:13.986Z"
        },
        {
        "uuid": "842add9a-995e-4903-88e6-1348fee07084",
        "movieId": 12,
        "roomId": 5,
        "slot": 8,
        "timeStart": "2021-07-31T14:00:00.000Z",
        "timeEnd": "2021-07-31T16:00:00.000Z",
        "price": 6,
        "createdAt": "2021-07-18T08:01:38.655Z",
        "updatedAt": "2021-07-18T08:01:38.655Z"
        }
      ];
    await queryInterface.bulkInsert("Showtimes", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Showtimes", null, {});
  },
};
