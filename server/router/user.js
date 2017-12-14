const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const Subject = require('../models/Subject');
const passwordHash = require('../lib/passwordHash');
const subjectValidate = require('../lib/subjectValidate');

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

  User.findById(userId).populate('subjects').exec((err, user) => {
    Subject.findById(subjectId, (err, subject) => {
      if (subjectValidate(user.subjects, subject)) {
        user.subjects.push(subject);
        user.seats = user.seats - 1;
        user.save(err => {
          if (err) {
            return next(err);
          }
          return res.json(user);
        })
      } else {
        return res.json({ error: 'DUPLICATE' })
      }
    })
  });
})

router.delete('/delete/:userId/:subjectId', (req, res, next) => {
  const { userId, subjectId } = req.params;

  User.findById(userId, (err, user) => {
    Subject.findById(subjectId, (err, subject) => {
      subject.seats = subject.seats + 1;
      subject.save(err => {
        user.subjects.pull(subjectId);
        user.save(err => {
          if (err) {
            return next(err);
          }
          return res.json(user);
        })
      })
    })
  });
})

router.get('/session', (req, res, next) => {
  if (!req.user) {
    return res.json(null);
  }
  User.findById(req.user._id).populate('subjects').exec((err, user) => {
    return res.json(user);
  })
})

module.exports = router;
