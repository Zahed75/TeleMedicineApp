// const viewTestresultModel = require('./model');

const addTestResult = async (data) => {
  const testResult = new viewTestresultModel(data);
  return await testResult.save();
};

const updateTestResult = async (testResultId, updatedValue) => {
  const updatedTestResult = await viewTestresultModel.findByIdAndUpdate(
    testResultId,
    updatedValue,
    { new: true }
  );

  if (!updatedTestResult) {
    throw new Error('Test Result not found');
  }

  return updatedTestResult;
};

const getAllTestResults = (limit, skip) => {
  return viewTestresultModel.find().limit(limit).skip(skip);
};

const getTestResultById = async (id) => {
  return await viewTestresultModel.findById(id);
};

const deleteTestResultById = async (id) => {
  return await viewTestresultModel.findByIdAndDelete(id);
};

module.exports = {
  addTestResult,
  updateTestResult,
  getAllTestResults,
  getTestResultById,
  deleteTestResultById,
};
