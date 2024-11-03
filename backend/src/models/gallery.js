const db = require('../../config/database');

exports.getAllPhotos = function(callback){
    db.query('SELECT * FROM photos', callback)
};

exports.getPhotoById = function(id, callback){
    db.query(
        'SELECT * FROM photos WHERE id = ?',
        [id], callback)
};

// exports.createPhoto = function(newPhotos, callback){
//     db.query(
//         'INSERT INTO photos SET ?', newPhotos, callback);
// };

// exports.updatePhoto = function(id, updatedPhoto, callback){
//     db.query(
//         'UPDATE photos SET ? WHERE id = ?', 
//         [updatedPhoto, id], callback);
// };

// exports.deletePhoto = function(id, callback){
//     db.query('DELETE FROM photos WHERE id = ?', [id], callback);
// };