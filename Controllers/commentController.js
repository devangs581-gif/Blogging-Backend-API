//1-Import
const Comment=require('../Models/commentModel');
const Post=require('../Models/postModel');

//2-function
exports.createComment = async (req,res)=>{
    try{
        //fetch data
        const {post,body,user}=req.body;

        //create a object
        const comment=new Comment({
            post,user,body
        });

        //save the new comment into the database
        const savedComment=await comment.save();

        //find post by id and adding new comment to that comment array
        const updatedPost=await Post.findByIdAndUpdate(post,{$push : {comments:savedComment._id}},{new:true})
        .populate("comments").exec();

        res.status(200).json({
            success:true,
            data:updatedPost,
            message:"Your comment has been created successfully"
        });
    }

    catch(err){
        return res.status(500).json({
            success:false,
            message:"Comment not created successfully"
        });
    }
}