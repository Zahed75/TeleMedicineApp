const { Mongoose } = require("mongoose");

const MedicationSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
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
});

const Medication = Mongoose.model("Medication", MedicationSchema);
module.exports = Mongoose.model("Medication", MedicationSchema);