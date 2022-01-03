const express = require('express');
const router = express.Router();
const Comment = require('../schemas/comment')

router.get('/', async(req,res)=>{
    let comments = await Comment.find().limit(10);
    res.json({
        Success: true,
        data: comments
    });
});

router.post('/', async(req,res)=>{
    let newComment = new Comment(req.body);
    newComment = await newComment.save();
    res.json({
        Success: true,
        data: newComment
    });
});

router.delete('/:id', async(req,res)=>{
    let commentDeleted = await Comment.findByIdAndDelete(req.params.id)
    res.json({
        Success: true,
        data: commentDeleted
    });
});

router.put('/:id', async(req,res)=>{
    let commentUpdated = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({
        Success: true,
        data: commentUpdated
    });
});

module.exports = router;