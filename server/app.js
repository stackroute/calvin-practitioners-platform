const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const path = require('path');
require('./api/v1/authentication/passport.js')(passport);
// const jwt = require('jsonwebtoken');

const app = express();
// const port = process.env.PORT || 4200;
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
const clientPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(clientPath));
// app.use('/',function(req, res, next) {
//     console.log('inside cros')
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.use('/', (req, res, next) => {
// // console.log('inside is authrenticate');
// // console.log(req.cookies.currentUser);
// //   const token=req.cookies.currentUser;
// //   console.log(token);
// //   next();
//   if (req.cookies.currentUser) { res.json({'msg':'done'}); } else { next(); }
// });

app.use('/', require('./api/v1/authentication'));

module.exports = app;
