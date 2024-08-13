"use strict";

//module
const express = require("express");
const app = express();

//routing
const home = require("./src/routes/home");

//views

app.set("views", "./src/views");
app.set("view engine", "ejs");

//middleware
app.use("/", home);

module.exports = app;
