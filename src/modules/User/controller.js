const express = require('express');
const router = express.Router();

const userService = require('./service');

const {
  brandManagerValidate,
  changeUserDetailsValidate,
  changePasswordValidate,
} = require('./request');




const { 
    ADMIN,
    DOCOTR,
    PATIETN,
    SUPER_ADMIN
   } = require('../../config/constant');
const roleMiddleware = require('../../middlewares/roleMiddleware');

const authMiddleware = require('../../middlewares/authMiddleware');
const handleValidation = require('../../middlewares/schemaValidation');









module.exports=router;