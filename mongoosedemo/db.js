const mongoose=require("mongoose");

const main=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/XYZ");
        console.log("Connected");
       // await StudentModel.insertMany([{name:"chunnu" ,roll:1,is_married:false }]);
      //console.log("Student saved");
        
        const student=new StudentModel({name:"ashish" ,is_married:true });
        await student.save();
        console.log("STUDENT SAVED");

    //    let data=await StudentModel.find();
    //    console.log(data); 
       mongoose.disconnect();
    }catch(err){
        console.log(err);
    }    
}
main();

const studentSchema=mongoose.Schema({
    name:String,
    roll:{type:Number,required:true},
    is_married:Boolean
});

const StudentModel=mongoose.model("student",studentSchema);