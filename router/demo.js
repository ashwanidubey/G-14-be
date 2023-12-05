const express=require('express')
const demorouter=express.Router();
demorouter.get('/demo',(req,res)=>{
  res.send("i am wroking demo")
})

module.exports={demorouter}