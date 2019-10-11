"use strict";
const db = require("../../models");
const { Router } = require("express");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const routes = Router();

routes.post("/create", (req, res) => {
  db.User.create({
    username: req.body.username,
    password: bcyrpt.hashSync(req.body.password, 10)
  }).then(() => {
    res.json({
      message: "Create success"
    });
  });
});

routes.get("/:user_id/destroy", (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(result => {
    res.json({
      message: "Delete success"
    });
  });
});

routes.post("/login", (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    const verify = bcyrpt.compareSync(req.body.password, user.password);
    if (verify) {
      jwt.sign(
        { user },
        process.env.SECRET_TOKEN,
        { expiresIn: "300s" },
        (err, token) => {
          res.json({
            token
          });
        }
      );
    }
  });
});

module.exports = routes;
