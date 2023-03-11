const express = require("express");
const router = express.Router();

const main = require("../models/main.model");

router.route("/").get(main.tasklist);

module.exports = router;
