"use strict";
const express = require("express");
const cors = require("cors");
const redis = require("redis");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

const routes = require("./controllers/index");
const userRoutes = require("./controllers/user");

const app = express();
const client = redis.createClient(6379, "localhost");

app.set("port", 5467);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    store: new RedisStore({ client }),
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET_TOKEN,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false }
  })
);
app.use("/", routes);
app.use("/user", userRoutes);

module.exports = app;
