const express = require("express");
const router = express.Router();

const { uploadDocService,getPaitentUploadById} = require("./service");
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
      res.status(401).json({ message: "File not uploaded" });
    }
  } catch (error) {
    next(error);
  }
});



const fetchPaitentUploadsById = async (req, res) => {
  try {
    const paitentId = req.params.paitentId;
    const schedule = await getPaitentUploadById(paitentId);

    if (!schedule) {
      return res
        .status(404)
        .json({ success: false, error: "Schedule not found" });
    }

    res.status(200).json({ success: true, data: schedule });
  } catch (error) {
    console.error("Error getting schedule by id:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

router.post("/uploadinfo", uploadDoc);
router.get("/fetchPaitentUploadsById/:paitentId", fetchPaitentUploadsById);
module.exports = router;
