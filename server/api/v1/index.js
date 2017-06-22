const router = require('express').Router();
const jwt = require('jsonwebtoken');

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

router.use('/members', require('./modules/members'));
router.use('/tools', require('./modules/tools'));
router.use('/login', require('./modules/login'));
router.use('/community-role-action', require('./modules/community-role-action'));
router.use('/community-tool-actions', require('./modules/community-tool-actions'));

router.use('/logout', (req, res) => {
  res.clearCookie('currentUser');
  res.redirect('/');
});
router.use('/members', require('./modules/members'));

router.use('/tools', require('./modules/tools'));

router.use('/test', (req, res) => {
  res.send('To test middle ware');
});
router.use(require('./modules/authentication'));

router.use('/activity', require('./modules/activity-page'));

router.use('/userCommunities', require('./modules/community'));
router.use('/community', require('./modules/community'));

router.use('/community-role-action', require('./modules/community-role-action'));

module.exports = router;
