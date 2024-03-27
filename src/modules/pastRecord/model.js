const mongoose = require("mongoose");
const PastRecordSchema = new mongoose.Schema({

PastRecord : {
    type : String
},
Date: {
    type: String
  },

})
module.exports= mongoose.model("PastRecordSchema",PastRecordSchema);