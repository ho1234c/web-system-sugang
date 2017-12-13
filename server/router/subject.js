const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const User = require('../models/User');
const passwordHash = require('../lib/passwordHash');

// get all subject
router.get('/fetch', (req, res, next) => {
  Subject.find({}, (err, subject) => {
    if(err) {
      return next(err);
    }
    res.json(subject);
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

module.exports = router;

