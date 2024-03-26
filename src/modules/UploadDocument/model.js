const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    
  docName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  FileLink: {
    type: String,
    required: true
  }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
