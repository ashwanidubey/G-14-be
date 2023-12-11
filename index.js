const express=require('express')
const {router}=require('./router/router')
require('dotenv').config()

const {connectToMongo}=require('./db')
connectToMongo();
const app=express();
app.use(express.json())
const port=process.env.PORT
app.use(router)
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})