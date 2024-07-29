const express=require("express");
const fs=require("fs");
const {timeLogger}=require("./middlewares/timelogger.middleware");
const {logger}=require("./middlewares/logger.middleware");
const {todoRouter}=require("./router/todo.router");
const {studentRouter}=require("./router/student.router");
const path=require("path");

var cors = require('cors')
let app=express();

//MIDDLEWARE
app.use(cors());
app.use(timeLogger);
app.use(logger);
app.use(express.static(path.join(__dirname,"/public")));
console.log();

// ROUTERS
app.use("/todos",todoRouter);
app.use("/students",studentRouter);

// ROUTE
app.get("/",(req,res)=>{
    console.log("this is home page");
    res.send("This is Home page");
})

app.get("/static",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})