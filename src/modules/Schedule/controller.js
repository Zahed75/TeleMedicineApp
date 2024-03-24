const express = require("express");
const router = express.Router();

const {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateScheduleById,
  deleteScheduleById,
} = require("./service");

const createNewSchedule = async (req, res) => {
  try {
    const scheduleData = req.body;
    const schedule = await createSchedule(scheduleData);
    res.status(201).json({ success: true, data: schedule });
  } catch (error) {
    console.error("Error creating schedule:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const fetchAllSchedules = async (req, res) => {
  try {
    const schedules = await getAllSchedules();
    res
      .status(200)
      .json({ success: true, data: schedules, count: schedules.length });
  } catch (error) {
    console.error("Error getting all schedules:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const fetchScheduleById = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const schedule = await getScheduleById(scheduleId);

    if (!schedule) {
      return res
        .status(404)
        .json({ success: false, error: "Schedule not found" });
    }

    res.status(200).json({ success: true, data: schedule });
  } catch (error) {
    console.error("Error getting schedule by id:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const schedule = await getScheduleById(scheduleId);

    if (!schedule) {
      return res
        .status(404)
        .json({ success: false, error: "Schedule not found" });
    }

    const updatedSchedule = await updateScheduleById(scheduleId, req.body);
    res.status(200).json({ success: true, data: updatedSchedule });
  } catch (error) {
    console.error("Error updating schedule:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const schedule = await getScheduleById(scheduleId);

    if (!schedule) {
      return res
        .status(404)
        .json({ success: false, error: "Schedule not found" });
    }

    const deletedSchedule = await deleteScheduleById(scheduleId);
    res.status(200).json({ success: true, data: deletedSchedule });
  } catch (error) {
    console.error("Error deleting schedule:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

router.post("/createSchedule", createNewSchedule);
router.get("/fetchAllSchedules", fetchAllSchedules);
router.get("/fetchScheduleById/:id", fetchScheduleById);
router.put("/updateSchedule/:id", updateSchedule);
router.put("/deleteSchedule/:id", deleteSchedule);

module.exports = router;
