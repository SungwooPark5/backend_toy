const Test = require('../models/test');

exports.getAllTests = function(req, res){
    Test.getAllTests((err, tests)=>{
        if(err) throw err;
        res.json(tests);
    });
};

exports.getTestById = function(req, res){
    Test.getTestById(req.params.id, (err, test)=>{
        if (err) throw err;
        res.json(test);
    });
};

exports.createTest = function(req, res){
    const newTest = {
        title: req.body.title,
        content: req.body.text
    };
    Test.createTest(newTest, (err, result)=>{
        if(err) throw err;
        res.json({message: 'Test created successfully'});
    });
};

exports.updateTest = function(req, res){
    const updatedTest = {
        title: req.body.title,
        content: req.body.text
    };
    Test.updateTest(req.params.id, updatedTest, (err, result)=>{
        if(err) throw err;
        res.json({message: 'Test updated successfully'});
    });
};

exports.deleteTest = function(req, res){
    Test.deleteTest(req.params.id, (err, result)=>{
        if(err) throw err;
        res.json({message: 'Test deleted successfully'});
    });
};