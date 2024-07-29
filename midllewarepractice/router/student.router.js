const express=require("express");
let studentRouter=express.Router();

studentRouter.get("/",(req,res)=>{
    res.send("This is STUDENT DATA");
});

studentRouter.get("/chunnu",(req,res)=>{
    res.send("This is CHUNNU DATA");
});

module.exports={studentRouter};