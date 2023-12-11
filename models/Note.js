const mongoose = require('mongoose');

const noteschema=mongoose.Schema(
    { title: String ,
      desc: String ,
      status:String,
      date :{type:Date, default:Date.now()}
    }
    )
const Note = mongoose.model('Note', noteschema);

module.exports={Note}