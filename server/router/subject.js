const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const User = require('../models/User');
const passwordHash = require('../lib/passwordHash');

// get subject by major
router.get('/fetch/:major', (req, res, next) => {

});

// create subject
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
module.exports = router;

