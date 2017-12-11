const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const passwordHash = require('../lib/passwordHash');


router.post('/create', (req, res, next) => {
<<<<<<< HEAD
  const user = new User({
=======
  const User = new User({
>>>>>>> ksy
    email: req.body.email,
    password: passwordHash(req.body.password),
    displayName: req.body.displayName
  });

  user.save(err => {
    if(err) console.log(err);
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
      displayName: user.displayName,
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
