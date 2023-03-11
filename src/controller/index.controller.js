const express = require("express");
const router = express.Router();

const main = require("../models/main.model");
const model = require("../models/tasks.model");

router.route("/").get(main.tasklist);

router.post("/add,model.addTask");
module.exports = router;
