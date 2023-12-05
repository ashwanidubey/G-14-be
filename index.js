const express=require('express')
const {router}=require('./router/router')
require('dotenv').config()
const app=express();
const port=process.env.PORT
app.use(router)
app.listen(port,()=>{
    console.log("server started")
})