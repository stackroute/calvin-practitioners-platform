const router = require('express').Router();

router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  res.clearCookie('currentUser');
  res.redirect('/');
});
router.use(require('./modules/authentication'));
router.use('/members', require('./modules/members'));

router.use('/tools', require('./modules/tools'));

router.use('/test', (req, res) => {
  res.send('To test middle ware');
});


router.use('/user', require('./modules/user'));
// router.use('/activity', require('./modules/activity-page'));

router.use('/userCommunities', require('./modules/community'));
router.use('/community', require('./modules/community'));

router.use('/community-role-action', require('./modules/community-role-action'));

module.exports = router;
