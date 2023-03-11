// app.js
"use strict";

const express = require("express");

const indexRouter = require("./controller/index.controller.js");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true }));

app.use("/index", indexRouter);

app.get("/", (req, res) => {
  res.redirect("/index");
});

module.exports = app;
