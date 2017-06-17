const router = require('express').Router();
const controller = require('./login-controller');
const passport = require('passport');

router.get('/logout', (req, res) => {
  // console.log('logout called');
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
  controller.generateToken(req, res, next).then((result) => {
    res.cookie('currentUser', result);
    res.redirect('/app/home');
  }, (err) => {
    res.send(err);
  });
});
module.exports = router;
