const UserModel = require("./model");

const getUsers = () => {
  return UserModel.find();
  const getUsers = (limit, skip) => {
    return UserModel.find().limit(limit).skip(skip);
  };
};

const searchDoctorsByNames = async (userName) => {
  try {
    const doctors = await UserModel.find({
      userName: { $in: userName },
      role: "DC",
    }).select({ userName: 1, email: 1, role: 1 });
    return doctors;
  } catch (error) {
    throw error;
  }
};

const getUserInfoById = async (userId) => {
  try {
    const user = await UserModel.findById({ _id: userId });

    return user;
  } catch (error) {
    throw new Error(error);
  }
}
const updateUserInfoById = async (testResultId, updatedValue) => {
  try {
    const updatedTestResult = await UserModel.findByIdAndUpdate(
      testResultId,
     updatedValue,
    { new: true }
     );
     if (!updatedTestResult) {
      throw new Error('Test Result not found');
    }
  
    return updatedTestResult;
  } catch (error) {
    throw new Error(error);
  }
}



// const searchDoctorsByNames = async (req, res) => {
//   const { userName } = req.query;
//   try {
//     const doctors = await UserModel.find({
//       userName: { $in: userName.split(",") },
//       role: "DC",
//     }).select({ userName: 1, email: 1, role: 1 });
//     return doctors;
//   } catch (error) {
//     throw error;
// }
// }

module.exports = {
  getUsers,
  searchDoctorsByNames,
  getUserInfoById,
  updateUserInfoById
};
