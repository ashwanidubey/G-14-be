const express=require('express')
const {authrouter}=require('./auth')
const {demorouter}=require('./demo')
const {myfunction}=require('../function/myfunction')
const router=express.Router();


router.use(authrouter)
router.use(demorouter)
router.get('/hello',myfunction)

module.exports={router}