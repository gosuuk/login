"use strict";
<<<<<<< HEAD
const User = require("../../models/User");
=======

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650
const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
<<<<<<< HEAD
  register: (req, res) => {
    res.render("home/register");
  },
};
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};
=======
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650
module.exports = {
  output,
  process,
};