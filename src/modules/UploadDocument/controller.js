const express = require("express");
const router = express.Router();
const { uploadDocService } = require("./service");
const multer = require("multer");

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/modules/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    const uploadedFile = req.file;
    if (uploadedFile) {
      res
        .status(200)
        .json({ message: "File uploaded successfully", file: uploadedFile });
    } else {
      res.status(401).json({ message: "File no uploaded" });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/uploadinfo", uploadDoc);
module.exports = router;
