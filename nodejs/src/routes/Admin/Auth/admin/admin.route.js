const express = require("express");
const { registerAdmin, loginAdmin } = require("../../../../controllers/Admin/admin.controller");

const adminRoute = express.Router();

adminRoute.post("/registerAdmin", registerAdmin);

adminRoute.post("/loginAdmin", loginAdmin);

module.exports = adminRoute;