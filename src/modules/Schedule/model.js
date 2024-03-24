const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    max: [30, "Doctor Name must be at most 30 characters"],
    required: [true, "Doctor Name is required"],
  },
  Specialist: {
    type: String,
    max: [30, "Specialist must be at most 30 characters"],
    required: [true, "Specialist is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
