"use strict";
require("dotenv").config();
const app = require("./app");
const http = require("http");
const db = require("./models");

const server = http.createServer(app);

db.sequelize.sync().then(() => {
  server.listen(5476, () => {
    console.log("Express server listening on port " + server.address().port);
  });
});
