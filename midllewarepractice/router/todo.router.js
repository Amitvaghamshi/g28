const express=require("express");
let todoRouter=express.Router();

todoRouter.get("/",(req,res)=>{
    res.send("This is All TODOS");
})

todoRouter.get("/1",(req,res)=>{
    res.send("THIS IS TODO WITH ID 1");
})

todoRouter.get("/delete",(req,res)=>{
    res.send("Todo deleted");
})

module.exports= {todoRouter};