const { string, date } = require('joi');
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
        type:string,
        enum:['positive','negeative']
    },
    date:{
        type:date,

    }

})
const viewTestresultModel = mongoose.model('user',viewTestresult);
module.exports=viewTestresultModel