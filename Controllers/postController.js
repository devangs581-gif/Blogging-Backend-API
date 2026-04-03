const Post=require('../Models/postModel');

exports.createPost=async(req,res)=>{
        
    try{
        const {title,body}=req.body;

        const post=new Post({
        title,body
        });

       const savedPost=await post.save();
       
       res.status(200).json({
          success:true,
          data:savedPost,
          message:"Your post created succssefully"
       });
    }

     catch(err){
        console.error(err);
        return res.status(400).json({
            message:"Post is not created successfully"
        });
     }
}

exports.getAllPosts=async (req,res)=>{
      try{
         const posts=await Post.find().populate("comments").populate("likes").exec();
         res.json({
            posts
         });
      }
      catch(err){
         console.error(err);
         return res.status(400).json({
            message:"While fetching all posts"
        });
      }
}