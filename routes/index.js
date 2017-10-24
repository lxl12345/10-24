var express = require('express');
var router = express.Router();
var fs=require('fs');
/* GET home page. */
var n=0;
router.get('/', function(req, res, next) {
	fs.readFile('read.txt','utf-8',function(err,data){
		n++
		console.log(n)
		fs.writeFile('read.txt','当前浏览的次数是:'+n)
		res.render('index', { title: n});
	})
  
});

module.exports = router;
