// Using Express Router directly
const TestResultService = require('./service');
const Joi = require('joi'); // For validation

const express = require("express");
const router = express.Router();

const addTestResultSchema = Joi.object({
  userId: Joi.string(),
  name: Joi.string(),
  status: Joi.string().valid('done', 'pending', 'block'),
  result: Joi.string().valid('positive', 'negative'),
  date: Joi.date(),
});

const addTestResult = async (req, res, next) => {
  try {
    const { error } = addTestResultSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const testResult = await TestResultService.addTestResult(req.body);
    res.status(201).json(testResult);
  } catch (error) {
    next(error);
  }
};

const updateTestResult = async (req, res, next) => {
  try {
    const { error } = addTestResultSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const testResult = await TestResultService.updateTestResult(
      req.params.testResultId,
      req.body
    );
    res.status(200).json(testResult);
  } catch (error) {
    next(error);
  }
};

const getAllTestResults = async (req, res, next) => {
  try {
    const testResults = await TestResultService.getAllTestResults(
      req.query.limit,
      req.query.skip
    );
    res.status(200).json(testResults);

  } catch (error) {
    next(error);
  }
};

const getTestResultById = async (req, res, next) => {
  try {
    const testResult = await TestResultService.getTestResultById(req.params.id);
    res.status(200).json(testResult);

  } catch (error) {
    next(error);
  }
};

const deleteTestResultById = async (req, res, next) => {
  try {
    const testResult = await TestResultService.deleteTestResultById(req.params.id);
    res.status(200).json(testResult);
  } catch (error) {
    next(error);
  }
};


const getTestResultByUserId = async (req, res, next) => {
  try {
    const testResult = await TestResultService.getTestResultByUserId(req.params.userId);
    if (!testResult) {
      return res.status(401).json({ message: "Test result not found" });
    }
    res.status(200).json({ message: "Success", testResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};










router.post('/addtestresult', addTestResult);
router.put('/updateTestResult/:testResultId', updateTestResult);
router.get('/alltestresults', getAllTestResults);
router.get('/getTestResultById/:id', getTestResultById);
router.put('/testResultId/:id', deleteTestResultById);
router.get('/getTestResultByUserId/:userId', getTestResultByUserId);

module.exports = router;

