const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const passwordHash = require('../lib/passwordHash');

// get subject by major
router.get('/fetch', (req, res, next) => {
  Subject.find({}, (err, subject) => {
    res.json({ subject });
  });
});

// create subject
router.post('/create', (req, res, next) => {
  const { name, major, subjectId, credit, time, professor, lectureTime, lectureRoom, isCyber, created_at } = req.body;
  const subject = new Subject({ name, major, subjectId, credit, time, professor, lectureTime, lectureRoom, isCyber, created_at });

  subject.save(err => {
    if(err) console.log(err);
    res.send('success');
  });
});

module.exports = router;
