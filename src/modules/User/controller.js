const express = require("express");
const router = express.Router();

const { searchDoctorsByNames } = require("./service");



const searchByDoctorName = async (req, res) => {
  try {
    const doctors = await searchDoctorsByNames(req.query);
    res
      .status(200)
      .json({ success: true, data: doctors, count: doctors.length });
  } catch (error) {
    console.error("Error getting all doctors:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

router.get("/search", searchByDoctorName);

module.exports = router;
