const Document = require('./model');

const uploadDocService = async(req,res)=>{
  try{
   
    const { docName, date,FileLink,paitentId,doctorId} = req.body;
    
    
    const newDocument = new Document({
      docName: docName,
      date: date,
      FileLink: FileLink, // Assuming you're storing the file path in the database
      paitentId : paitentId,
      doctorId : doctorId
    
    });
    
    const savedDocument = await newDocument.save();
  if (!savedDocument) {
    return res.status(500).json({ message: 'Failed to save document' });
  }
 return savedDocument;
  } catch (error) {
    
    next(error);
  }

}
const getPaitentUploadById = async (id) => {
  try {
    const schedule = await Document.find({paitentId:id});
    return schedule;
  } catch (error) {
    throw error;
  }
};




module.exports = {
  uploadDocService,
  getPaitentUploadById
}