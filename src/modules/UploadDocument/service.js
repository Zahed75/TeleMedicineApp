const docModel = require('./model');

const uploadDocService = async()=>{
    upload.single('file');
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/') // Destination folder for storing uploaded files
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname) // Use the original file name as the stored file name
        }
      });
      
      const upload = multer({ storage: storage });
      

}
module.exports = {uploadDocService}