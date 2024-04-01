const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
  medicationName: {
    type: String,
    max: [30, "Medication Name must be at most 30 characters"],
    required: [true, "Medication Name is required"],
  },
  morning: {
    type: Boolean,
    default: false,
  },
  afternoon: {
    type: Boolean,
    default: false,
  },
  evening: {
    type: Boolean,
    default: false,
  },
  night: {
    type: Boolean,
    default: false,
  },
  dayRemaining: {
    type: Number,
    default: 0,
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
  doctorId:{
    type : String,
    required: [true, "doctor id required"]
  },
  paitentId:{
    type : String,
    required: [true, "Paitent id is required"]
  }
});

module.exports = mongoose.model("MedicationRecord", MedicationSchema);
