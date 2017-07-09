const router = require('express').Router();
const config = require('./modules/common/config');



router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  res.clearCookie(config.cookie.name);
  res.redirect('/');
});


router.use(require('./modules/authentication'));

//router.use('/community-details', require('./modules/community-details'));

// Each Module to be placed after this

router.use('/communities', require('./modules/communities'));

router.use('/toolmarketplace', require('./modules/toolmarketplace'));
router.use('/community', require('./modules/community'));

router.use('/user', require('./modules/user'));
router.use('/memberactivitypage', require('./modules/activity-page'));


// router.use('/community', require('./modules/community'));

router.use('/communityroleactions', require('./modules/communityroleactions'));



router.use('/communitytools', require('./modules/communitytools'));

router.use('/community', require('./modules/members'));

// router.use('/community', require('./modules/tools'));

router.use('/communityMembers', require('./modules/community-member'));

router.use('/memberInvite', require('./modules/member-invite'));

router.use('/communitytemplates', require('./modules/communitytemplates'));


module.exports = router;