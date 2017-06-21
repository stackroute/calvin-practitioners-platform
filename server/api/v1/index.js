const router = require('express').Router();

router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  res.clearCookie('currentUser');
  res.redirect('/');
});
router.use('/members', require('./modules/members'));

router.use('/tools', require('./modules/tools'));

router.use(require('./modules/authentication'));

router.use('/activity', require('./modules/activity-page'));

router.use('/userCommunities', require('./modules/community'));

router.use('/community', require('./modules/community'));





router.use('/community-role-action', require('./modules/community-role-action'));

router.use('/userCommunities', require('./modules/community'));

module.exports = router;
