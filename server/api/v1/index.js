const router = require('express').Router();
const config = require('./modules/common/config');

router.use('/login', require('./modules/login'));
router.use('/logout', (req, res) => {
  res.clearCookie(config.cookie.user);
  res.clearCookie(config.cookie.userCommunity);
  res.redirect('/');
});

// router.use(require('./modules/authentication'));

// router.use(require('./modules/authentication'));

// Each Module to be placed after this

router.use('/communities', require('./modules/communities'));

router.use('/toolmarketplace', require('./modules/toolmarketplace'));
router.use('/communitytools', require('./modules/communitytools'));

// router.use('/community', require('./modules/community'));

router.use('/memberactivitypage', require('./modules/communityactivities'));


// router.use('/community', require('./modules/community'));

router.use('/communityroleactions', require('./modules/communityroleactions'));





// router.use('/community', require('./modules/tools'));

router.use('/communityMembers', require('./modules/communitymember'));

// router.use('/memberInvite', require('./modules/member-invite'));

router.use('/communitytemplates', require('./modules/communitytemplates'));

router.use('/users', require('./modules/users'));
router.use('/webhook',require('./modules/webhooks'));
module.exports = router;
