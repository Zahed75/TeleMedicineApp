const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  docName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    require: true
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
},{versionKey:false});

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
