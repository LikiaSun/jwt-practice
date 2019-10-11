"use strict";
const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(`HTTP server is listening localhost:${app.get("port")}`);
});
