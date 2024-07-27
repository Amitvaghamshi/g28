const express=require("express");
const fs=require("fs");
const {timeLogger}=require("./middlewares/timelogger.middleware");
const {logger}=require("./middlewares/logger.middleware");
var cors = require('cors')

let app=express();

//MIDDLEWARE
app.use(cors());
app.use(timeLogger);
app.use(logger);


// ROUTE
app.get("/",(req,res)=>{
    console.log("this is home page");
    res.send("This is Home page");
})

app.get("/students",(req,res)=>{
    res.send("This is STUDENT DATA");
})

app.get("/students/chunnu",(req,res)=>{
    res.send("This is CHUNNU DATA");
})


app.get("/todos",(req,res)=>{
    res.send("This is All TODOS");
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})