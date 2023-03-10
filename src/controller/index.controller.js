const express = require("express");
const router = express.Router();

const main = require("../models/main.model");
const model = require("../models/tasks.model");

router.route("/").get(main.tasklist);

router.post("/create", model.addTask);
router.post("/update", model.updateTask);
router.post("/delete", model.deleteTask);
router.post("/init", model.initTable);

module.exports = router;
