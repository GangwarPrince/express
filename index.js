const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");
require("dotenv").config();

const app=express();
app.use(express.json());
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDb connected...");  
})
.catch(err=>console.log(err));

// route for creating one student record
app.post("/students",async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    
    }catch(err){
        res.status(400).json({message:err.message});
      
    }
})

app.get("/students",async(req,res)=>{
    try{
        const records = await Student.find();
        res.status(200).json(records);
    }catch(err){
        res.status(400).json({message:err.message});
    }

});

// Read individual user
app.get("/student/:id",async(req,res)=>{
    try{
      const student =   await student.findById(req.params.id);
      res.json(student);
    }catch(err){

    }
})


app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})