const {User}=require('../models/Auth')
const login=async (req,res)=>{
    const {email,password}=req.body;
    const result=await User.find({email,password})
    if(result.length>=1)
    { 
     res.send({"staus":"sucess",email,password})
    }
    else{
     res.send("invalid creds")  
    }
}
const logout=(req,res)=>{

    res.send("hello i am logout")
}
const signup=(req,res)=>{
    const {name,email,password,cpassword}=req.body
    console.log( {name,email,password,cpassword})
    const user=new User({name,email,password})
    user.save();
    res.send("hello i am signup")
}

module.exports={login,logout,signup}