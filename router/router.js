const express=require('express')
const {authrouter}=require('./auth')
const {noterouter}=require('./note')
const router=express.Router();


router.use(authrouter)
router.use(noterouter)


module.exports={router}