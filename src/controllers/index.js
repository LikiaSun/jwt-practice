"use strict";
const { Router } = require("express");

const router = Router();

router.get("/exist", (req, res) => {
  res.send("Yes");
});

module.exports = router;
