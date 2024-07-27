const fs=require("fs");

const logger=(req,res,next)=>{
    let message= req.method +" is made on url "+req.url +" on time "+(new Date);
    fs.appendFileSync("./logger.txt",message+"\n");
    next();
}
module.exports={logger};