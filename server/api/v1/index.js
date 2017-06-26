const router = require('express').Router();
const config = require('./modules/common/config');

router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  res.clearCookie(config.cookie.name);
  res.redirect('/');
});

// router.use(require('./modules/authentication'));

router.use('/community-details', require('./modules/community-details'));

router.use('/community', require('./modules/community'));

router.use('/user', require('./modules/user'));

router.use('/activity', require('./modules/activity-page'));

router.use('/community', require('./modules/community'));

router.use('/communityRoles', require('./modules/communityRoles'));

// router.use('/toolmarketplace', require('./modules/toolmarketplace'));

router.use('/communityTools', require('./modules/communityTools'));

router.use('/community', require('./modules/members'));

router.use('/community', require('./modules/tools'));

module.exports = router;

