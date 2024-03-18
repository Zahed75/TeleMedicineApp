const express = require('express');
const router = express.Router();

//middlewares
const authVerifyMiddleware = require('../middlewares/authMiddleware.js');


//routes
 const authRoute = require('../modules/Auth/controller');
 const viewTestresultroute = require('../modules/viewTestresult/controller.js')


// Root End Point
router.use('/auth', authRoute);
router.use('/viewTestresult', viewTestresultroute);

module.exports = router;
