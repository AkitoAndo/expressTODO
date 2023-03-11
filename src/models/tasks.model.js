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
  deleteTask: async (req, res) => {
    try {
      await Task.sequelize.transaction(async (t) => {
        const inputId = req.body.id;
        await Task.destroy({
          where: {
            id: inputId,
          },
        });
        res.redirect("/");
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  updateTask: async (req, res) => {
    try {
      await Task.sequelize.transaction(async (t) => {
        await Task.update(
          {
            done: "done",
          },
          {
            where: {
              id: req.body.id,
            },
          }
        );
        res.redirect("/");
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  initTable: async (req, res) => {
    try {
      await Task.sequelize.transaction(async (t) => {
        await Task.destroy({
          truncate: true,
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
