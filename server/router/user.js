const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passwordHash = require('../lib/passwordHash');

router.post('/create', (req, res, next) => {
  const User = new User({
    username: req.body.username,
    password: passwordHash(req.body.password),
    displayname: req.body.displayname
  });
  User.save(err => {
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
      email: user.email,
      displayname: user.displayname,
    };

    return req.logIn(userData, err => {
      if (err) {
        return next(err);
      }
      return res.json({ user: userData });
    });
  })(req, res, next)
});

router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200).send('logout success');
});

module.exports = router;
