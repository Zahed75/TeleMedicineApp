const express = require("express");
const router = express.Router();

const { getUsers, searchDoctorsByNames } = require("./service");

const getAllUser = async (req, res) => {
  try {
    const allUser = await getUsers(req.query.limit, req.query.skip);
    if (!allUser) {
      res.status(401).json({ message: "User not found" });
    }
    res.status(200).json(allUser);
  } catch (error) {
    console.error("Error getting User", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const searchByDoctorName = async (req, res) => {
  try {
    const doctors = await searchDoctorsByNames(req.query.userName.split(","));
    res
      .status(200)
      .json({ success: true, data: doctors, count: doctors.length, message: "Doctors found" });
  } catch (error) {
    console.error("Error getting all doctors:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};



router.get("/getAllUser", getAllUser);
router.get("/search", searchByDoctorName);

module.exports = router;
