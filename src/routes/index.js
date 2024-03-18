const express = require("express");
const router = express.Router();

//middlewares
const authVerifyMiddleware = require("../middlewares/authMiddleware.js");

//routes
<<<<<<< HEAD
 const authRoute = require('../modules/Auth/controller');
 const viewTestresultroute = require('../modules/viewTestresult/controller.js')


// Root End Point
router.use('/auth', authRoute);
router.use('/viewTestresult', viewTestresultroute);
=======
const authRoute = require("../modules/Auth/controller");
const medicationRoute = require("../modules/MedicationRecord/controller");

// Root End Point
router.use("/auth", authRoute);
router.use("/medication", medicationRoute);
>>>>>>> 84cbfc13cc6c88ce43338a4b4f186f1fc3925924

module.exports = router;
