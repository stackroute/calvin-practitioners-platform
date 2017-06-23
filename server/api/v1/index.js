const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.use('/communityRoles', require('./modules/communityRoles'));
router.use('/communityTools', require('./modules/communityTools'));
// middleware to validate token
router.use((req, res, next) => {
//   console.log('inside middle ware');
  const url = req.url;
//   console.log('url', url);
  if (url.includes('google') || url.includes('logout')) {
    next();
  } else {
    const user = req.cookies.currentUser;
    if (user) {
      jwt.verify(user, 'secret key', (err) => {
        if (err) {
        //   console.log('error', err);
          res.redirect('/');
        } else {
          next();
        }
      });
    //   console.log('cookie is :', user);
      next();
    } else { res.redirect('/'); }
  }
});
const config = require('./modules/common/config');


router.use('/members', require('./modules/members'));
router.use('/tools', require('./modules/tools'));
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


module.exports = router;
