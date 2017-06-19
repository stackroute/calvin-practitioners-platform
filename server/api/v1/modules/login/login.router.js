const loginCtrl = require('./login.controller');
const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/auth/logout', (req, res) => {
  res.clearCookie('currentUser');
  res.redirect('/');
});
router.get('/logout2', (req, res) => {
  res.clearCookie('isLogginUser');
  res.redirect('/');
});
router.get('/app', (req, res) => { 
  res.cookie('isLogginUser', 'true');
  res.redirect('/#/app/home');
});
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', (req, res, next) => {
  loginCtrl.redirectGoogle(req, res, next).then((result) => {
    // console.log('result is ', result);
    res.cookie('currentUser', result);
    res.redirect('/#/app/home');
  }, (err) => {
    res.json(err);
  });
});

module.exports = router;
