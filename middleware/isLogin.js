const {User}=require('../models/Auth')
const isLogin=async (req,res,next)=>{
   const {email,password}=req.body;
   //res.send("checking")
   const result=await User.find({email,password})
   console.log(result,result.length)
   if(result.length>=1)
     { 
      next();
   }
     else{
      res.send("invalid creds")  
     }
   
}

module.exports={isLogin}