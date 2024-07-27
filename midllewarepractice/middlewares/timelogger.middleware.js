let timeLogger=(req,res,next)=>{
    let startTime=new Date();
      next();
      let endTime=new Date();
      console.log(endTime-startTime);
}
module.exports={timeLogger};