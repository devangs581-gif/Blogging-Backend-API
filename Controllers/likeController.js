const Like=require('../Models/likeMode');
const Post=require('../Models/postModel');

exports.createLike=async(req,res)=>{
    try{
        const {post,user}=req.body;

        const like=new Like({
            post,user
        });

        const savedLike=await like.save();

        const updatedLike=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate("likes").exec();
        

        res.status(200).json({
            data:updatedLike,
            message:"Like created successfully"
        });

    }
    catch(err){
        console.error(err);
        return res.status(400).json({
            data:err,
            message:"Error while creating Like"
        })
    }
}

exports.unlikePost=async(req,res)=>{
    try{
        const{postid,likeid}=req.body;
        await Like.findByIdAndDelete(likeid);
        await Post.findByIdAndUpdate(postid,{$pull:{likes:likeid}},{new:true}).populate("likes").exec();

        res.status(200).json({
            data:postid
        });
    }
    catch(err){
        console.error(err);
        return res.status(400).json({
            data:err,
            message:"Error while Jnliking Like"
        })
    }
}