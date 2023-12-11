const mongoose = require('mongoose');



const connectToMongo=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/g14').
    then(()=>{console.log("connected to mongodb")}).
    catch(()=>{console.log("connection to mongodb failed")});
}

module.exports={connectToMongo}