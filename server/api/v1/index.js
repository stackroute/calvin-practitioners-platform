const router = require('express').Router();
const config = require('./../../appconfig/env/dev');

router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  res.clearCookie(config.cookies.user);
  res.clearCookie(config.cookies.userCommunity);
  res.redirect('/');
});


router.use('/toolauth', require('./modules/toolauth'));
router.use('/invite', require('./modules/communityinvitation'))

router.use(require('./modules/authentication'));
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
