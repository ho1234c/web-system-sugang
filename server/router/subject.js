const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const Subject = require('../models/Subject');
const User = require('../models/User');
const passwordHash = require('../lib/passwordHash');
=======
// const User = require('../models/User');
// const passwordHash = require('../lib/passwordHash');
const Subject = require('../models/Subject');
>>>>>>> origin/ksy

// get subject by major
router.get('/fetch/:major', (req, res, next) => {

});

// create subject
<<<<<<< HEAD
/*
router.post('/createSubject', (req, res, next) => {
  const Subject = new Subject({
    name: req.body.name,
    major: req.body.major,
    subjectId: req.body.subjectId.toString(),
    credit: req.body.credit,
    time: req.body.time,
    professor: req.body.professor,
    lectureTime: req.body.lectureTime,
    lectureRoom: req.body.lectureRoom,
    isCyber: req.body.IsCyber,
    seats: req.body.seats
  });

  subject.save(err => {
    if(err) console.log(err);
    res.send('success');
  });
});
router.post('getSubjectByMajor', (req, res, err) => {
  Subject.find({major: req.body.major}, (err, documents) => {
    if (err) {
      return console.log("err" + err);
    }
    res.send(documents);
  });
});
*/
=======
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
>>>>>>> origin/ksy
module.exports = router;

