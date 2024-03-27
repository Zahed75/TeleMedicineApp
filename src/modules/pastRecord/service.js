const Document = require('./model');

const uploadDocService = async(req,res)=>{
  try{
   
    const { PastRecord, Date } = req.body;

    const newDocument = new Document({
        PastRecord: PastRecord,
        Date: Date,
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
module.exports = {uploadDocService}