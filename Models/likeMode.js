//1-Import Mongoose
const mongoose=require('mongoose');

//2-Schema creation
const likeSchema=new mongoose.Schema({
      
      post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
      },
      
      user:{
         type:String,
         required:true
      }
});

//3-Export
module.exports=mongoose.model("Like",likeSchema);
