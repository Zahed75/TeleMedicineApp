const express = require("express");
const router = express.Router();

const { searchDoctorsByNames } = require("./service");
const { getUsers,getUserInfoById,updateUserInfoById } = require("./service");

const searchByDoctorName = async (req, res) => {
  try {
    const doctors = await searchDoctorsByNames(req.query.userName.split(","));
    res
      .status(200)
      .json({ success: true, data: doctors, count: doctors.length });
  } catch (error) {
    console.error("Error getting all doctors:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const allUser = await getUsers();
    if (!allUser) {
      res.status(401).json({ message: "User not found" });
    }
    res.status(200).json(allUser);
  } catch (error) {
    console.error("Error getting User", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const getUserInfoByIdHandler = async (req, res, next) => {
  try {
      const iddd = req.params.iddd;
      if (!iddd) {
        return res.status(400).json({ message: "userId is missing in header" });
      }
      const user = await getUserInfoById(iddd);
      res.status(200).json({ user });
  } catch (err) {
      next(err, req, res);
  }
}

const updateById = async (req, res, next)=>{

try{
    const user = await updateUserInfoById(
      req.params.testResultId,
      req.body);
      if (!user) {
        return res.status(400).json({ message: "user info for updating is missing" });
          }
    res.status(200).json({ user });
}
catch (err) {
  next(err, req, res);
}

}



router.get("/search", searchByDoctorName);
router.get("/getAllUser", getAllUser);
router.get("/getuserInfoById/:iddd",getUserInfoByIdHandler)
router.put("/updateById/:testResultId",updateById)
module.exports = router;
