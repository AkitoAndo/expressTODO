"use strict";

const { Task } = require("../../db/models");

const main = {
  tasklist: async (req, res) => {
    try {
      await Task.sequelize.transaction(async (t) => {
        await Task.sync();
        const tasks = await Task.findAll({
          order: [["date"]],
        });
        res.render("index", { tasks });
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

module.exports = main;

