const express = require("express");
const router = express.Router();

// Middlewares
const authVerifyMiddleware = require('../middlewares/authMiddleware.js');

// Routes
const authRoute = require('../modules/Auth/controller');
const viewTestresultroute = require('../modules/viewTestResult/controller.js');
const medicationRoute = require("../modules/MedicationRecord/controller");
const scheduleRoute = require("../modules/Schedule/controller");

// Root End Point
router.use('/auth', authVerifyMiddleware, authRoute);
router.use('/viewTestresult', authVerifyMiddleware, viewTestresultroute);
router.use("/medication", authVerifyMiddleware, medicationRoute);
router.use("/schedule", authVerifyMiddleware, scheduleRoute);

module.exports = router;
