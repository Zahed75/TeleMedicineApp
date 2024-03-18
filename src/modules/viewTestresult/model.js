
const mongoose = require('mongoose');

const viewTestresult =new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    name:{
        type:String,
        required:true
        
    },
    status:{
        type:String,
        enum:['done','pending','block']
    },
    result:{
        type:String,
        enum:['positive','negeative']
    },
    date:{
        type:Date,

    }

})
const viewTestresultModel = mongoose.model('ViewTestResult',viewTestresult);
module.exports=viewTestresultModel