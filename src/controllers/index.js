"use strict";
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const verifyToken = require("../utils/jwtVerify");

const router = Router();

router.get("/exist", (req, res) => {
  res.send("Yes");
});

router.get("/vip", verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.SECRET_TOKEN, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Verify already",
        authData
      });
    }
  });
});

module.exports = router;
