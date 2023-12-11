const {User}=require('../models/Auth')
const isValidCred=async (req,res,next)=>{
    const {name,email,password,cpassword}=req.body
    if(password.length<3 || password !=cpassword )
     {
      console.log("condition1")
      return res.send("invalid creds")
    }

    const result=await User.find({email})
    console.log("result")
    console.log(result)
      if(result.length>=1)
      {
        res.send("user already exist")
      }
      else{
        next();
      }
   
  }
  
  module.exports={isValidCred}