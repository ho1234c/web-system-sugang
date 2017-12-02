const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const passwordHash = require('./passwordHash');

module.export = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    (email, password, done) => {
      User.findOne({ username: username, password: passwordHash(password) }, (err, user) => {
        if (!user) {
          return done(null, false, { message: '아이디 또는 비밀번호 오류 입니다.' });
        } else {
          return done(null, user);
        }
      });
    }
  ));
  // serialize시 한커번에 user data를 세션에 저장.
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}
