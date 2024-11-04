"use strict";
//실제 중심이 되는 main modules

//module
import express from "express";
const app = express();

//middleware (라우터보다 먼저 정의)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing
import home from "./routes/views/home";
app.use("/", home);

import userApiRoutes from "./routes/api/users";
app.use("/api", userApiRoutes);

app.use(express.static(`${__dirname}/public`));
console.log(__dirname);

//views
app.set("views", "./src/views");
app.set("view engine", "ejs");

export default app;
