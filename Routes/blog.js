const express=require('express');
const router=express.Router();

const { createComment }=require('../Controllers/commentController');
const { createPost,getAllPosts }=require('../Controllers/postController');
const { createLike , unlikePost}=require('../Controllers/likeController');

router.post('/createComment',createComment);
router.post('/createPost',createPost);
router.get('/posts',getAllPosts);
router.post('/createLike',createLike);
router.delete('/unlikePost',unlikePost);


module.exports=router;