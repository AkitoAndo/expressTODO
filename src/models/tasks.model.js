"use strict";

const { Task } = require("../../db/models");

const model = {
  addTask: async (req, res) => {
    try {
      await Task.sequelize.transaction(async (t) => {
        const inputName = req.body.name;
        const inputDate = req.body.date;
        await Task.create({
          name: inputName,
          date: inputDate,
        });
        res.redirect("/");
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

module.exports = model;
