const db = require('../../config/database');

exports.getAllPosts = function(callback){
    db.query('SELECT * FROM posts', callback)
};

exports.getPostById = function(id, callback){
    db.query(
        'SELECT * FROM posts WHERE id = ?',
        [id], callback)
};

exports.createPost = function(newPost, callback){
    db.query(
        'INSERT INTO posts SET ?', newPost, callback);
};

exports.updatePost = function(id, updatedPost, callback){
    db.query(
        'UPDATE posts SET ? WHERE id = ?', 
        [updatedPost, id], callback);
};

exports.deletePost = function(id, callback){
    db.query('DELETE FROM posts WHERE id = ?', [id], callback);
};