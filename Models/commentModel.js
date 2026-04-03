//1-Import Mongoose
const mongoose=require('mongoose');

//2-Schema define karna
const commentSchema=new mongoose.Schema({
     //konsi post par comment kara hain
     post:{
        type:mongoose.Schema.Types.ObjectId,//jiss post par comment kara hoga usss ki id aa jayegi or refrence to that post
        ref:"Post",
     },
     //Kisne comment kara hain
     user:{
        type:String,
        required:true,
     },
     
     //Kya comment kara hain
     body:{
        type:String,
        required:true,
     }
});

//3-Export
module.exports=mongoose.model("Comment",commentSchema);

