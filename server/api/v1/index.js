const router = require('express').Router();
const config = require('./modules/common/config');

router.use('/login', require('./modules/login'));


router.use('/logout', (req, res) => {
  res.clearCookie(config.cookie.name);
  res.redirect('/');
});

router.use(require('./modules/authentication'));
// Each Module to Be placed after this

router.use('/members', require('./modules/members'));
// router.use(require('./modules/authentication'));
// router.use('/activity', require('./modules/activity-page'));
// router.use('/userCommunities', require('./modules/community'));
router.use('/community-details', require('./modules/community-details'));
router.use('/members', require('./modules/members'));
router.use('/tools', require('./modules/tools'));

router.use('/user', require('./modules/user'));
router.use('/activity', require('./modules/activity-page'));
// router.use('/userCommunities', require('./modules/community'));
router.use('/community', require('./modules/community'));
router.use('/community-role-action', require('./modules/community-role-action'));

module.exports = router;