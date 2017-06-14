const express = require('express');
const app = express();
const port = process.env.PORT || 4200;
const path = require('path');

const cookieParser = require('cookie-parser');
// const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
// const controller = require('./app.controller');
require('./login/passport.js')(passport);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
const clientPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(clientPath));
app.get('/hello', (req, res) => res.send({ msg: 'Howdy partner ' }));
app.get('/welcome', (req, res) => {
  res.send({ msg: 'Welcome to app' });
});
app.get('/users', (req, res) => {
  res.send({ msg: 'welcomes users' });
});
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', (req, res, next) => {

  generateToken(req, res, next).then((result) => {
    console.log("request is ===============", result);
    res.cookie('currentUser', result);
    res.redirect('/profile');

  }, err => {
    console.log("error is", err);
  });

});

let generateToken = function (req, res, next, cb) {
  let promise = new Promise((resolve, reject) => {
    passport.authenticate('google', function (err, user, info) {
      if (err) {
        reject(err);
      }
      else {
        console.log("inside Google callback");
        console.log(user);
        resolve(user);
      }
    })(req, res, next);
  });
  return promise;
}

app.use((req, res) => {
  res.status(404).send({ error: 'Resource not found' });
});

module.exports = app;
