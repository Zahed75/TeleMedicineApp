const docModel = require('./model');

const uploadDocService = async(req,res)=>{
  try{
    // Access other form fields using req.body
    const { u_Id, docName, date } = req.body;

    // Construct the document object to be saved
    const newDocument = new docModel({
      userId: u_Id,
      docName: docName,
      date: date,
      docUpload: uploadedFile.path // Assuming you're storing the file path in the database
    });

    // Saving the document to the database
    const savedDocument = await newDocument.save();

    // Respond with success message
    res.status(200).json({ message: 'File uploaded successfully', document: savedDocument });
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }

}
module.exports = {uploadDocService}