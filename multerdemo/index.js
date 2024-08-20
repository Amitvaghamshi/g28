const express=require("express");
const multer  = require('multer');
const  path=require("path");

let app=express();
//MIDDLEWARE
app.use(express.static("./public"));

let storage=multer.diskStorage({
    filename:function(req, file, cb){
        let fileName=file.fieldname+" "+Math.random()+ ""+path.extname(file.originalname); 
        return cb(null,fileName);
    },
    destination:function(req, file, cb){
        return cb(null , "uploads/");
    }
})
let upload=multer({storage:storage});

app.get("/savefile",(req,res)=>{
     res.sendFile(path.join(__dirname,"/public/index.html"));
})

app.post("/uploadfile",upload.single("FILE") ,(req,res)=>{
    res.send("FILE SAVED");
})

app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.listen(3000,()=>{
    console.log("SERVER IS RUNNIG ON PORT 3000");
})