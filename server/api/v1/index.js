const router = require('express').Router();

router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  res.clearCookie('currentUser');
  res.redirect('/');
});

router.use(require('./modules/authentication'));


router.use('/community', require('./modules/members'));

router.use('/community', require('./modules/tools'));

router.use('/community-details', require('./modules/community-details'));

router.use('/user', require('./modules/user'));
router.use('/activity', require('./modules/activity-page'));

router.use('/userCommunities', require('./modules/community'));
router.use('/community', require('./modules/community'));

router.use('/community-role-action', require('./modules/community-role-action'));

module.exports = router;

