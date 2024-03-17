const express = require("express");
const router = express.Router();

//middlewares
const authVerifyMiddleware = require("../middlewares/authMiddleware.js");

//routes
const authRoute = require("../modules/Auth/controller");
const medicationRoute = require("../modules/MedicationRecord/controller");

// Root End Point
router.use("/auth", authRoute);
router.use("/medication", medicationRoute);

module.exports = router;
