const express=require('express')
const noterouter=express.Router();
const {createnote,deletenote,updatenote,readnote}=require('../function/note')
const {isLogin}=require("../middleware/isLogin")


noterouter.post('/createnote',isLogin,createnote)
noterouter.get('/deletenote',isLogin,deletenote)
noterouter.get('/updatenote',isLogin,updatenote)
noterouter.post('/readenote',isLogin,readnote)

module.exports={noterouter}