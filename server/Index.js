const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel =require('./model/Employee')
const app = express()

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/employee')

app.post("/register",(req,res)=>{

    EmployeeModel.create(req.body)
    .then(employees =>res.json(employees))
    .catch(err => res.json(err))

})

app.post("/login",(req,res)=>{
    const {email,password}=req.body
    EmployeeModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.listen(3001,()=>{
    console.log("server running");
})