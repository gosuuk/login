"use strict";
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
<<<<<<< HEAD
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
=======
router.post("/login", ctrl.process.login);
>>>>>>> 24d92bb9c9b797da5d5f5af662f4aefc53ba3650

module.exports = router;