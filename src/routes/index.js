const express = require("express");
const router = express.Router();

// Middlewares
const authVerifyMiddleware = require("../middlewares/authMiddleware.js");

// Routes
const authRoute = require("../modules/Auth/controller.js");
const viewTestresultroute = require("../modules/viewTestResult/controller.js");
const medicationRoute = require("../modules/MedicationRecord/controller");
const scheduleRoute = require("../modules/Schedule/controller");
const User = require("../modules/User/controller.js")
const UploadFile = require("../modules/UploadDocument/controller.js")

// Root End Point
router.use("/auth", authVerifyMiddleware, authRoute);
router.use("/viewTestresult", viewTestresultroute);
router.use("/medication", medicationRoute);
router.use("/schedule", scheduleRoute);
router.use("/user",User);
router.use("/uplaodfile",UploadFile);
module.exports = router;
