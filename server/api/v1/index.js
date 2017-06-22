const router = require('express').Router();
const jwt = require('jsonwebtoken');

// middleware to validate token
router.use((req, res, next) => {
//   console.log('inside middle ware');
  const url = req.url;
  console.log('url', url);
  if (url.includes('google')) {
    console.log('got url ', url);
    next();
  } else {
    const user = req.cookies.currentUser;
    if (user) {
      jwt.verify(user, 'secret key', (err, decoded) => {
        if (err) {
        //   console.log('error', err);
          res.redirect('/');
        } else {
          console.log('decoded', decoded);
          next();
        }
      });
    //   console.log('cookie is :', user);
      next();
    } else { res.redirect('/'); }
  }
});


router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  res.clearCookie('currentUser');
  res.redirect('/');
});
router.use('/test', (req, res) => {
  res.send('To test middle ware');
});

router.use('/user', require('./modules/user'));

router.use(require('./modules/authentication'));

router.use('/activity', require('./modules/activity-page'));


router.use('/community', require('./modules/community'));


router.use('/members', require('./modules/members'));

router.use('/tools', require('./modules/tools'));


router.use('/community-role-action', require('./modules/community-role-action'));

router.use('/userCommunities', require('./modules/community'));

module.exports = router;
