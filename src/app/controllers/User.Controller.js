const db = require("../models");
const request = require('request');
const { json } = require("sequelize");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.FBID) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create User
    const user = {
      FBID: req.body.FBID,
      name: req.body.name,
      email: req.body.email,
      profileCompleted: false
    };
  
    // Save Tutorial in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating User."
        });
      });
  };