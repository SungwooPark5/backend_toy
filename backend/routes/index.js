var express = require('express');
var router = express.Router();

const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '../../frontend/build', 'index.html');
  console.log(filePath);
  res.sendFile(filePath);
});

module.exports = router;