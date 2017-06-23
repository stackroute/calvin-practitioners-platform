const loginCtrl = require('./login.controller');
const express = require('express');
const passport = require('passport');
const config = require('../common/config');

const router = express.Router();

router.get('/auth/logout', (req, res) => {
  // console.log('inside logout');
  res.clearCookie(config.cookie.name);
  res.redirect('/');
});

// router.get('/auth/logout', (req, res) => {
//   res.clearCookie('currentUser');
//   res.redirect('/');
//   // res.send('logout called');
// });

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', (req, res, next) => {
  loginCtrl.redirectGoogle(req, res, next).then((result) => {
    // console.log('result in cookie', result);
    res.cookie(config.cookie.name, result);
    res.redirect('/#/app/home');
  }, (err) => { // eslint-disable-line no-unused-vars
    // res.json(err);
    res.redirect(500, '/#/login');
  });
});

module.exports = router;
