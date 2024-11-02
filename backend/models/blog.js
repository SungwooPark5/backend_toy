const db = require('../config/database');

exports.getAllTests = function(callback){
    db.query('SELECT * FROM tests', callback)
};

exports.getTestById = function(id, callback){
    db.query(
        'SELECT * FROM tests WHERE id = ?',
        [id], callback)
};

exports.createTest = function(newTest, callback){
    db.query(
        'INSERT INTO tests SET ?', newTest, callback);
};

exports.updateTest = function(id, updatedTest, callback){
    db.query(
        'UPDATE tests SET ? WHERE id = ?', 
        [updatedTest, id], callback);
};

exports.deleteTest = function(id, callback){
    db.query('DELETE FROM tests WHERE id = ?', [id], callback);
};