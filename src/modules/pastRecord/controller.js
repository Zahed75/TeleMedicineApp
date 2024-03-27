const express = require("express");
const router = express.Router();
const {uploadDocService} =require("./service")

const uploadDoc = async (req, res) => {
    try {
      const FileInfo = await uploadDocService(req, res);
  
      if (!FileInfo) {
        res.status(401).json({ message: "file infos not saved" });
      }
      res.status(200).json({ message: "file infos saved", data: FileInfo });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  };

router.post("/pastRec", uploadDoc);
module.exports = router;
