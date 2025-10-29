const mongoose = require("mongoose")

const SupperAdminModel = new mongoose.Schema({
    username:{
        type:String,
        default:"supperAdmin"
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["supperAdmin","admin","manager","kuryer","user","constructor",'Accountant',"seller","salesManager"]
    }
},{timestamps:true})

const SupperAdmin = mongoose.model("SupperAdmin",SupperAdminModel)


module.exports= SupperAdmin