"use strict";

const { doesNotMatch } = require("assert");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          id: 0,
          name: "task1",
          date: "2020-02-02 00:00:00",
          done: "check",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
