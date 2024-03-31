const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  docName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  FileLink: {
    type: String,
    required: true,
  },
  paitentId:{
    type : String,
    required: [true, "Paitent id is required"]
  },
  doctorId:{
    type : String,
    required: [true, "doctor id required"]
  }
});

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
