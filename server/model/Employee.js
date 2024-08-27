const mongoose =require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    // name:String,
    // email:String,
    // password:String
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const EmployeeModel = mongoose.model("employee",EmployeeSchema)
module.exports=EmployeeModel