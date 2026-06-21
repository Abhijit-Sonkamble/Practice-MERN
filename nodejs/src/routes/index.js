const express = require("express");

const route = express.Router();

route.use("/auth", require("./Admin/Auth/auth.route"))

module.exports = route;