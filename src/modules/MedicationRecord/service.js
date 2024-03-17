const MedicationRecord = require("./model");

const addMedicationRecord = async (data) => {
  try {
    const medication = await MedicationRecord.create(data);
    return medication;
  } catch (error) {
    throw error;
  }
};

const getAllMedicationRecords = async () => {
  try {
    const medications = await MedicationRecord.find({ isDeleted: false });
    return medications;
  } catch (error) {
    throw error;
  }
};

const getMedicationRecordById = async (id) => {
  try {
    const medication = await MedicationRecord.findById(id);
    return medication;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addMedicationRecord,
  getAllMedicationRecords,
  getMedicationRecordById,
};
