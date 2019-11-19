var express = require('express');
var router = express.Router();
var chapterList = require('../data.json').chapterList;
var userList = require('../data.json').userList;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res, next) {
  var username=req.body.username;//post专用
  var pwd=req.body.pwd; 
  var users = JSON.stringify(userList);
  var userlists = JSON.parse(users);
  if(userlists[0].username == username && userlists[0].pwd == pwd){
    res.end(JSON.stringify({"status":1}));
  }else{
    res.end(JSON.stringify({"status":0}));
    res.end("login error");
  };
});
router.get('/listmanager', function(req, res, next) {
  res.render('list',{list:chapterList});
});
router.get('/addChapter', function(req, res, next) {
  res.render('addChapter'); 
});

router.post('/addChapter', function(req, res, next) {
  var title=req.body.title;
  var content=req.body.content; 
  res.render("chapterList",{list:chapterList});

});
router.get('/getChapterList', function(req, res, next) {
  res.render('chapterList',{list:chapterList});
});
router.get('/detail', function(req, res, next) {
  res.render('chapter',{list:chapterList});
});

router.get('/app', function(req, res, next) {
  console.log(JSON.stringify(chapterList));
});

module.exports = router;
