const express = require("express");
const router = express.Router();
const {uploadDocService}= require('./service')
const docModel = require('./model');

const uploadDoc = async(req,res)=>{
    try{
        const {u_Id,docName,date} = req.body;
        const doc = await uploadDocService()
        if(!doc){
            res.status(402).json({message:"file upload issue from controlller service function not working properly"})
        }
        const newDocument = new docModel({
            userId : u_Id,
            docName: docName,
            date: date,
            docUpload: req.file.path // Assuming you're storing the file path in the database
          });
        
          // Saving the document to the database
          newDocument.save()
            .then(savedDocument => {
              res.status(201).json(savedDocument); // Respond with the saved document object
            })
            .catch(error => {
              res.status(500).json({ error: error.message }); // Handle error if saving fails
            });
        
       
    }
    catch(error){
        console.log(error)
        res.status(500).json({ success: false, error: "Internal server error in upload doc" });
    }
}

router.post('/upload', uploadDoc);

module.exports = router;