const express=require("express");
const {StudentModel}=require("../models/student.model.js");

const studentRouter=express.Router();

studentRouter.post("/add",async (req,res)=>{
    const payload=req.body;
    try{
        const student=new StudentModel(payload);
        await student.save();
        res.send("STUDENT SAVED");
    }catch(err){
        res.send("Something went wrong");
    }
})

studentRouter.delete("/delete/:id",async(req,res)=>{
     const id=req.params.id;
     console.log(id);
     try{
        let response= await StudentModel.findByIdAndDelete({_id:id})
        if(response!=null){
            res.send(" student is deleted");
        }else{
            res.send("student is not found with id ")
        }
     }catch(err){
        console.log(err);
        res.send("something went wrong");
     }
})

studentRouter.get("/",async (req,res)=>{
   try{
        let data=  await StudentModel.find();
        res.send(data);
   }catch(err){
      res.send("something went wrong");
   }
})

module.exports={studentRouter};