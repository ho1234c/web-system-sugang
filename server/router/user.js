const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const Subject = require('../models/Subject');
const passwordHash = require('../lib/passwordHash');

router.post('/create', (req, res, next) => {
  const { email, password, displayName } = req.body;
  const user = new User({
    email,
    password: passwordHash(password),
    displayName
  });

  user.save(err => {
    console.log('test');
    if (err) {
      return next(err);
    }
    res.send('success');
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user || info) {
      return res.status(400).json(info);
    }
    const userData = {
      _id: user._id,
      email: user.email,
      displayName: user.displayName,
      subjects: user.subjects,
      grade: user.grade,
      major: user.major,
      maximum_credit: user.maximum_credit
    };

    return req.logIn(userData, err => {
      if (err) {
        return next(err);
      }
      return res.json(userData);
    });
  })(req, res, next)
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('logout success');
});

router.post('/add/:userId', (req, res, next) => {
  const { userId } = req.params;
  const { subjectId } = req.body;

  User.findById(userId, (err, user) => {
    Subject.findById(subjectId, (err, subject) => {
      user.subjects.push(subject);
      user.save(err => {
        if (err) {
          return next(err);
        }
        res.send('success');
      })
    })
  });

})

module.exports = router;
