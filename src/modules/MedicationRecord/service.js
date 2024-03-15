const addMedicationRecord = async (data) => {
  const medicationRecord = await medicationRecord.create(data);
  return medicationRecord;
};

const updateMedicationRecord = async (medicationRecordId, updatedValue) => {
  const updatedMedicationRecord = await medicationRecord.findByIdAndUpdate(
    {
      _id: medicationRecordId,
    },
    updatedValue,
    {
      new: true,
    }
  );

  if (!updatedMedicationRecord) {
    throw new NotFound("MedicationRecord not found");
  }

  return updatedMedicationRecord;
};

const getAllMedicationRecords = (limit, skip) => {
  return medicationRecord.find().limit(limit).skip(skip);
};

const getMedicationRecordById = async (id) => {
  const medicationRecord = await medicationRecord.findById({ _id: id });
  return medicationRecord;
};

const deleteMedicationRecordById = async (id) => {
  const medicationRecord = await medicationRecord.findByIdAndDelete({
    _id: id,
  });
  return medicationRecord;
};

module.exports = {
  addMedicationRecord,
  updateMedicationRecord,
  getAllMedicationRecords,
  getMedicationRecordById,
  deleteMedicationRecordById,
};
