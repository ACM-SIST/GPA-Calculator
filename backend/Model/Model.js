const mongoose = require("mongoose")


const subjectschema = mongoose.Schema({
    code:{
        type:String,
        required : true,
    },
    name:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        required:true
    }
})

const semisterSchema = new mongoose.Schema({
    semister:{
        type:Number,
        required:true
    },
    subjects:[subjectschema]
})

module.exports = mongoose.model('Semister',semisterSchema)