const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
  docName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  docUpload: {
    type: String,
    required: true
  }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
