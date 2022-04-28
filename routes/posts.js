const express = require ('express');

const router = express.Router();

const PostModels = require('../models/PostModel');

//(1). Get all the posts
router.get('/', async (req,res) => {
    try{
        const posts = await PostModels.find();
        res.json(posts);    
    } catch(err){
        res.json({message:err});
    };
});

//we are going to access the post content. Submit the post
router.post('/', async (req,res) => {
    
    const post = new PostModels({
        title: req.body.title,
        description: req.body.description
    });
    //save this into database
     try{
         const postSaved = await post.save();
         res.json(postSaved)

     }catch(err) {
            res.json({message: err});
        }
    });

//Find post by using specificId
router.get('/:specificId', async (req,res) => {
       try{
            const post = await PostModels.findById(req.params.specificId);
            res.json(post); 
       } catch(err){
           res.json({message: err});
       }
});

//Delete post by using specific Id
router.delete('/:specificId', async(req,res) =>{
    try{
       const DeletePost = await PostModels.remove({_id: req.params.specificId});
        res.json(DeletePost);
    } catch(err){
        res.json({message:err});
    }
});

//update post by using specifiId
router.patch('/:specificId', async (req,res) => {
    try{
        const updatePost = await PostModels.updateOne(
                {_id: req.params.specificId},
                {$set:{title: req.body.title}}
            );
        res.json(updatePost);
    } catch(err){
        res.json({message:err});
    }
});




module.exports = router;