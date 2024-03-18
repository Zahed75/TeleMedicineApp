const express = require("express");
const router = express.Router();
const { addMedicationRecord, getAllMedicationRecords, getMedicationRecordById } = require("./service");

const createMedicationRecord = async (req, res) => {
  try {
    const medication = await addMedicationRecord(req.body);
    res.status(201).json({ success: true, data: medication });
  } catch (error) {
    console.error("Error creating medication record:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const fetchAllMedicationRecords = async (req, res) => { // Renamed from getAllMedicationRecords to avoid naming conflict
  try {
    const medications = await getAllMedicationRecords(); // Corrected function call
    res.status(200).json({ success: true, data: medications, count: medications.length });
  } catch (error) {
    console.error("Error getting all medication records:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const fetchMedicationRecordById = async (req, res) => { // Renamed from getMedicationRecordById to avoid naming conflict
  try {
    const medicationId = req.params.id; // Corrected to use 'id' instead of '_id'
    const medication = await getMedicationRecordById(medicationId); // Corrected function call

    if (!medication) {
      return res.status(404).json({ success: false, error: "Medication record not found" });
    }

    res.status(200).json({ success: true, data: medication }); // Corrected status code to 200
  } catch (error) {
    console.error("Error getting medication record by id:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

router.post("/createMedicationRecord", createMedicationRecord);
router.get("/getAllMedicationRecords", fetchAllMedicationRecords); // Changed function name to avoid conflict
router.get("/getMedicationRecordById/:id", fetchMedicationRecordById); // Changed function name to avoid conflict

module.exports = router;
