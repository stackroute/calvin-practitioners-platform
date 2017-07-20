const loginCtrl = require('./login.controller');
const express = require('express');
const passport = require('passport');
const config = require('../../../../appconfig/env/dev');
require('./strategy/google/passport.js')(passport);

const router = express.Router();
//follow=/invite/recipient/
router.get('/follow',(req, res) => {
  console.log('req', req);
  res.send(200).status('done');
});

router.use(passport.initialize());
router.use(passport.session()); // persistent login sessions

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', (req, res, next) => {
  loginCtrl.redirectGoogle(req, res, next).then((result) => {
    // console.log('result in cookie', result);
    res.cookie(config.cookies.user, result[0]);
    res.cookie(config.cookies.userCommunity, result[1]);
    res.redirect('/#/app/home');
  }, (err) => { 
    // eslint-disable-line no-unused-vars
    // res.json(err);
    res.redirect(500, '/#/login');
  });
});

module.exports = router;
