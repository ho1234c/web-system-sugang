const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const passwordHash = require('../lib/passwordHash');

// get all subject
router.get('/fetch', (req, res, next) => {
  Subject.find({}, (err, subject) => {
    if(err) {
      return next(err);
    }
    res.json({ subject });
  });
});

// create subject
router.post('/create', (req, res, next) => {
  const { name, major, courseNumber, credit, time, professor, lectureTime, lectureRoom, isCyber, created_at } = req.body;
  const subject = new Subject({ name, major, courseNumber, credit, time, professor, lectureTime, lectureRoom, isCyber, created_at });

  subject.save(err => {
    if(err) {
      return next(err);
    }
    res.send('success');
  });
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
