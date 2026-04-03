//1-Import Mongoose
const mongoose=require('mongoose');

//2-Post Schema
const postSchema=new mongoose.Schema({
       title:{
         type:String,
         required:true
       },
       body:{
        type:String,
        required:true
       },

       likes:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Like"
       }],

       comments:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Comment"
       }]
});

//3-Export
module.exports=mongoose.model("Post",postSchema);