const Post = require('../models/post');

exports.getAllPosts = function(req, res){
    Post.getAllPosts((err, posts)=>{
        if(err) throw err;
        res.json(posts);
    });
};

exports.getPostById = function(req, res){
    Post.getPostById(req.params.id, (err, post)=>{
        if (err) throw err;
        res.json(post);
    });
};

exports.createPost = function(req, res){
    const newPost = {
        title: req.body.title,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        upload_date: req.body.upload_date,
        writer: req.body.writer,
        content: req.body.content
    };
    Post.createPost(newPost, (err, result)=>{
        if(err) throw err;
        res.json({message: 'Post created successfully'});
    });
};

exports.updatePost = function(req, res){
    const updatedPost = {
        title: req.body.title,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        upload_date: req.body.upload_date,
        writer: req.body.writer,
        content: req.body.content
    };
    Post.updatePost(req.params.id, updatedPost, (err, result)=>{
        if(err) throw err;
        res.json({message: 'Post updated successfully'});
    });
};

exports.deletePost = function(req, res){
    Post.deletePost(req.params.id, (err, result)=>{
        if(err) throw err;
        res.json({message: 'Post deleted successfully'});
    });
};