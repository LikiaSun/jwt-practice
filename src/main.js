"use strict";
const app = require("./app");
const http = require("http");
const db = require("./models");
const debug = require("debug")("express-sequelize");

const server = http.createServer(app);

db.sequelize
  .sync()
  .then(() => {
    server.listen(5476, () => {
      debug("Express server listening on port " + server.address().port);
    });
  })
  .catch(e => console.log(e));
