const Schedule = require("./model");

const createSchedule = async (scheduleData) => {
  try {
    const schedule = await Schedule.create(scheduleData);
    return schedule;
  } catch (error) {
    throw error;
  }
};

const getAllSchedules = async () => {
  try {
    const schedules = await Schedule.find({ isDeleted: false });
    return schedules;
  } catch (error) {
    throw error;
  }
};

const getScheduleById = async (id) => {
  try {
    const schedule = await Schedule.findById(id);
    return schedule;
  } catch (error) {
    throw error;
  }
};
const getPaitentScheduleById = async (id) => {
  try {
    const schedule = await Schedule.find({paitentId:id});
    return schedule;
  } catch (error) {
    throw error;
  }
};

const getDoctorScheduleById = async (id) => {
  try {
    const schedule = await Schedule.find({doctorId:id});
    return schedule;
  } catch (error) {
    throw error;
  }
};


const updateScheduleById = async (id, data) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(id, data, {
      new: true,
    });
    return schedule;
  } catch (error) {
    throw error;
  }
};

const deleteScheduleById = async (id = "") => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    return schedule;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateScheduleById,
  deleteScheduleById,
  getPaitentScheduleById,
  getDoctorScheduleById
};
