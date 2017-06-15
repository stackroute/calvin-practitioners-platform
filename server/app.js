const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const path = require('path');
require('./api/v1/login/passport.js')(passport);

const app = express();
// const port = process.env.PORT || 4200;
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
const clientPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(clientPath));
app.use('/auth/google', (req, res, next) => {
  // console.log('inside is authrenticate');
  // console.log(req.cookies.currentUser);
  if (req.cookies.currentUser) { res.redirect('/app/home'); } else { next(); }
});
app.use('/auth/google', require('./api/v1/login'));

module.exports = app;
