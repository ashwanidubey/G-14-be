const express=require('express')
const noterouter=express.Router();

noterouter.get('/createnote',(req,res)=>{
    res.send("hello i am createrouter")
})

module.exports={noterouter}