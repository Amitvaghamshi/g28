const express=require("express");
const {connection}=require("./config/db.js");
const {studentRouter}=require("./router/student.router.js");
require('dotenv').config()
const {UserModel}=require("./models/user.model.js");


const app=express();
app.use(express.json());


app.post("/user/login",async (req,res)=>{
    const {email,password}=req.body;
    try{
      const users= await UserModel.find({email,password});
      if(users.length>0){
        res.send("Login success");
      }else{
        res.send("Wrong credentials");
      }
    }catch(err){
      res.send("something went wrong");
    }
})

app.post("/user/register",async (req,res)=>{
       const {name,email,password,mobile}=req.body;
       try{
            const user=new UserModel({name,email,password,mobile});
            await user.save();
            res.send("user saved");
       }catch(err){
        console.log(err);
         res.send("Something went wrong");
       }
})

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