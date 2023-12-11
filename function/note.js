const {Note}=require('../models/Note')

const createnote=(req,res)=>{
    const {title,desc,status}=req.body;
    const mynote = new Note(
        { title,
         desc,
         status 
        }
        );
    mynote.save().then(() => console.log('i am saved'));
    res.send("hello i am create router")
}

const deletenote=async (req,res)=>{
   
    //const noteid=req.params.id 
    const noteid = req.body.id 
    const note = await Note.findById(noteid);
    if(note)
    {
         newnote=await NoteSchema.findByIdAndDelete(noteid)
         return res.send({"note":newnote, "message":"note has been deleted",success:true});
    }
    else{

        return res.send({"status":"false", "message":"no note found"});
   
    }
}
const updatenote=async (req,res)=>{
     const noteid = req.body.id 
     const newnote=req.body.newnote
    const note = await Note.findById(noteid);
    if(note)
    {
         newnote=await NoteSchema.findByIdAndUpdate(noteid,{$set:newnote} , {new : true})
         return res.send({"note":newnote, "message":"note has been deleted",success:true});
    }
    else{
        return res.send({"status":"false", "message":"no note found"});
   
    }
}

const readnote=async (req,res)=>{
    const  {title}=req.body;
    const notes=await Note.find({title})
    res.send({"status":"success",notes})
    //res.send("hello i am read router")
}

module.exports={createnote,deletenote,updatenote,readnote}