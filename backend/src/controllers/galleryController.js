const Photo = require('../models/gallery');

exports.getAllPhotos = function(req, res){
    Photo.getAllPhotos((err, photos)=>{
        if(err) throw err;
        res.json(photos);
    });
};

exports.getPhotoById = function(req, res){
    Photo.getPhotoById(req.params.id, (err, photo)=>{
        if (err) throw err;
        res.json(photo);
    });
};

// exports.createPhoto = function(req, res){
//     const newPhoto = {
//         title: req.body.title,
//         upload_date: req.body.upload_date,
//         photo_name: req.body.photo_name,
//     };
//     Photo.createPhoto(newPhoto, (err, result)=>{
//         if(err) throw err;
//         res.json({message: 'Photo created successfully'});
//     });
// };

// exports.updatePhoto = function(req, res){
//     const updatedPhoto = {
//         title: req.body.title,
//         likes: req.body.likes,
//         dislikes: req.body.dislikes,
//         upload_date: req.body.upload_date,
//         writer: req.body.writer,
//         content: req.body.content
//     };
//     Photo.updatePhoto(req.params.id, updatedPhoto, (err, result)=>{
//         if(err) throw err;
//         res.json({message: 'Photo updated successfully'});
//     });
// };

// exports.deletePhoto = function(req, res){
//     Photo.deletePhoto(req.params.id, (err, result)=>{
//         if(err) throw err;
//         res.json({message: 'Photo deleted successfully'});
//     });
// };