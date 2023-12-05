const express=require('express')
const authrouter=express.Router();

authrouter.get('/login',(req,res)=>{
    res.send("hello i am login")
})

module.exports={authrouter}