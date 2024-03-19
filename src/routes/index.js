const express = require("express");
const router = express.Router();

//middlewares
const authVerifyMiddleware = require("../middlewares/authMiddleware.js");

//routes
const authRoute = require('../modules/Auth/controller');
const viewTestresultroute = require('../modules/viewTestresult/controller');
const medicationRoute = require("../modules/MedicationRecord/controller");
const scheduleRoute = require("../modules/Schedule/controller");

// Root End Point
router.use('/auth', authRoute);
router.use('/viewTestresult', viewTestresultroute);
router.use("/medication", medicationRoute);
router.use("/schedule", scheduleRoute);

module.exports = router;
