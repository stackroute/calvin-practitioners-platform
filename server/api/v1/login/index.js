const router = require('express').Router();
const controller = require('./login-controller');
const passport = require('passport');

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/callback', (req, res, next) => {
  controller.generateToken(req, res, next).then((result) => {
    // console.log('request is ===============', result);
    res.cookie('currentUser', result);
    res.redirect('/app/home');
  }, (err) => {
    // console.log('error is', err);
    res.send(err);
  });
});
module.exports = router;
