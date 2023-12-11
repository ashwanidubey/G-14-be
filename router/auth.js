const express=require('express')
const authrouter=express.Router();
const {login,logout,signup}
            =require('../function/auth')
const {isValidCred}=require('../middleware/isValidCred')
authrouter.post('/login',login)
authrouter.get('/logout',logout)
authrouter.post('/signup',isValidCred,signup)

module.exports={authrouter}