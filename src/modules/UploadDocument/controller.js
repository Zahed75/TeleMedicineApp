const express = require("express");
const router = express.Router();
const { uploadService } = require('./service')
const multer = require("multer");

const uploadDoc = async(req,res)=>{
  try{
    const FileInfo = await uploadService();
    if(!FileInfo){
      res.status(401).json({message:"file infos not saved"})
    }
    res.status(200).json({message:"file infos saved",data:FileInfo})
  }
  catch(error){

  }
}

  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../modules/uploads') // Destination folder for storing uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) // Use the original file name as the stored file name
    }
  });
  
  const upload = multer({ storage: storage });
  


router.post('/upload', upload.single('file'), async(req, res, next) => {
  try {
    const uploadedFile = req.file;
    res.status(200).json({ message: 'File uploaded successfully' ,file :uploadedFile});
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }
});

router.post('/uploadinfo', uploadDoc);
module.exports = router;