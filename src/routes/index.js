const express = require("express");
const router = express.Router();

// Middlewares
const authVerifyMiddleware = require("../middlewares/authMiddleware.js");

// Routes
const authRoute = require("../modules/Auth/controller.js");
const viewTestresultroute = require("../modules/viewTestresult/controller.js");
const medicationRoute = require("../modules/MedicationRecord/controller.js");
const scheduleRoute = require("../modules/Schedule/controller.js");
const User = require("../modules/User/controller.js")
const UploadFile = require("../modules/UploadDocument/controller.js")
const PastRecord = require("../modules/pastRecord/controller.js")


// Root End Point
router.use("/auth", authVerifyMiddleware, authRoute);
router.use("/viewTestresult", viewTestresultroute);
router.use("/medication", medicationRoute);
router.use("/schedule", scheduleRoute);
router.use("/user",User);
router.use("/uplaodfile",UploadFile);
router.use("/pastRecord",PastRecord);
module.exports = router;
