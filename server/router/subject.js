const express = require('express');
const router = express.Router();
// const User = require('../models/User');
// const passwordHash = require('../lib/passwordHash');
const Subject = require('../models/Subject');

// get subject by major
router.get('/fetch/:major', (req, res, next) => {

});

// create subject
router.post('/create', (req, res, next) => {
  console.log('creating subject');
  Subject.create(req.body, function(err, subject){
    if(err) console.log(err);
  })
});
router.get('/getAllMySubject', (req, res, next) => {
  console.log('loading my subject');
  Subject.find(function(err, subjects) {
    if(err) console.log(err);
    res.send(subjects);
  })
});
router.delete('/remove',function(req,res){
  console.log('subject removed?');
  Subject.remove( {name:req.query.request}, function(err, result){
    if(err) res.send(err);
    res.send(result);
  })
});






router.post('/addmemo',function(req,res){
  console.log("post - addmemo");
  Memo.create(req.body, function(err, result){
    // if(err) res.send(err);
    if(err){
      console.log('post -> create 애러');
    }
  })
});
router.delete('/removememo',function(req,res){
  console.log(req.query.request+'??????????');
  Memo.remove( {id:req.query.request}, function(err, result){
    if(err) res.send(err);
    res.send(result);
  })
});
router.get('/allmemo', function(req,res) {
  console.log("allmemo"+ req.query.request);
  Memo.find(function(err,memos){
    if(err) res.send(err);
    res.send(memos);
  })
})
module.exports = router;
