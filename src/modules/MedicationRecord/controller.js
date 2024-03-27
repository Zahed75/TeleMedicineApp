const express = require("express");
const router = express.Router();
const {
  addMedicationRecord,
  getAllMedicationRecords,
  getMedicationRecordById,
  updateMedicationRecordById,
  deleteMedicationRecordById,
} = require("./service");

const createMedicationRecord = async (req, res) => {
  try {
    const medication = await addMedicationRecord(req.body);
    res.status(201).json({ success: true, data: medication });
  } catch (error) {
    console.error("Error creating medication record:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};


const fetchAllMedicationRecords = async (req, res) => {
  try {
    const medications = await getAllMedicationRecords();
    res
      .status(200)
      .json({ success: true, data: medications, count: medications.length });
  } catch (error) {
    console.error("Error getting all medication records:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const fetchMedicationRecordById = async (req, res) => {
  try {
    const medicationId = req.params.id;
    const medication = await getMedicationRecordById(medicationId);

    if (!medication) {
      return res
        .status(404)
        .json({ success: false, error: "Medication record not found" });
    }

    res.status(200).json({ success: true, data: medication });
  } catch (error) {
    console.error("Error getting medication record by id:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const updateMedicationRecord = async (req, res) => {
  try {
    const medicationId = req.params.id;
    const medication = await getMedicationRecordById(medicationId);

    if (!medication) {
      return res
        .status(404)
        .json({ success: false, error: "Medication record not found" });
    }

    const updatedMedication = await updateMedicationRecordById(
      medicationId,
      req.body
    );
    res.status(200).json({ success: true, data: updatedMedication });
  } catch (error) {
    console.error("Error updating medication record:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const removeMedicationRecord = async (req, res) => {
  try {
    const medicationId = req.params.id;
    const medication = await getMedicationRecordById(medicationId);

    if (!medication) {
      return res
        .status(404)
        .json({ success: false, error: "Medication record not found" });
    }

    const deletedMedication = await deleteMedicationRecordById(medicationId);
    res.status(200).json({ success: true, data: deletedMedication });
  } catch (error) {
    console.error("Error deleting medication record:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

router.post("/createMedicationRecord", createMedicationRecord);
router.get("/getAllMedicationRecords", fetchAllMedicationRecords);
router.get("/getMedicationRecordById/:id", fetchMedicationRecordById);
router.put("/updateMedicationRecord/:id", updateMedicationRecord);
router.put("/deleteMedicationRecord/:id", removeMedicationRecord);

module.exports = router;
