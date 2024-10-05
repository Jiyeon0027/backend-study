"use strict";

//module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleware (라우터보다 먼저 정의)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routing
const home = require("./src/routes/home");
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

//views
app.set("views", "./src/views");
app.set("view engine", "ejs");

module.exports = app;
