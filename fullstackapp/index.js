const express=require("express");
const {connection}=require("./config/db.js");
const {studentRouter}=require("./router/student.router.js");
require('dotenv').config()


const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.use("/students",studentRouter);

app.listen(process.env.PORT,async ()=>{
      try{
        await connection;
        console.log("connected to db");
      }catch(err){
        console.log("Error to connecting db");
      }
      console.log("server is started on port "+process.env.PORT);
})