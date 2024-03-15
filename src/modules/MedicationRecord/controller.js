const router = require('../Auth/controller');
const MedicationService = require('./service');


const addMedication = async (req, res, next) => {
  try {
    const medication = await MedicationService.addMedication(req.body);
    res.status(201).json(medication);
  } catch (error) {
    next(error);
  }
};

const updateMedication = async (req, res, next) => {
  try {
    const medication = await MedicationService.updateMedication(
      req.params.medicationId,
      req.body
    );
    res.status(200).json(medication);
  } catch (error) {
    next(error);
  }
};

const getAllMedications = async (req, res, next) => {
  try {
    const medications = await MedicationService.getAllMedications(
      req.query.limit,
      req.query.skip
    );
    res.status(200).json(medications);
  } catch (error) {
    next(error);
  }
};


const getMedicationById = async (req, res, next) => {
  try {
    const medication = await MedicationService.getMedicationById(req.params.id);
    res.status(200).json(medication);
  } catch (error) {
    next(error);
  }
};

const deleteMedicationById = async (req, res, next) => {
  try {
    const medication = await MedicationService.deleteMedicationById(req.params.id);
    res.status(200).json(medication);
  } catch (error) {
    next(error);
  }
};
 

router.post('/addmedication', addMedication);
router.put('/:medicationId', updateMedication);
router.get('/allmedication', getAllMedications);
router.get('/:medicationId', getMedicationById);
router.delete('/:medicationId', deleteMedicationById);

module.exports = router;
