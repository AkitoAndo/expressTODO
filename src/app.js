// app.js
"use strict";

const express = require('express')

const app = express()
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("./src/public"));

const port = 3000

app.get('/', (req, res) => {
  res.render("index");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})