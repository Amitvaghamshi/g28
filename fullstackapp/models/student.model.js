const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:String,
    roll:Number,
    is_married:Boolean
})

const StudentModel=mongoose.model("student",studentSchema);

module.exports={StudentModel};