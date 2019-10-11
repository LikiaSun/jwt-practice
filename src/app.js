"use strict";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const routes = require("./controllers/index");
const userRoutes = require("./controllers/user");

const app = express();

app.set("port", 5467);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);
app.use("/user", userRoutes);

module.exports = app;
