router.use('/login', require('./modules/login'));



router.use('/logout', (req, res) => {

  res.clearCookie(config.cookie.name);

  res.redirect('/');

});



router.use(require('./modules/authentication'));

// Each Module to Be placed after this

router.use('/community-details', require('./modules/community-details'));

router.use('/members', require('./modules/members'));

router.use('/community', require('./modules/community'));

router.use('/user', require('./modules/user'));

router.use('/activity', require('./modules/activity-page'));

router.use('/community', require('./modules/community'));

router.use('/community-role-action', require('./modules/community-role-action'));

router.use('/toolmarketplace', require('./modules/toolmarketplace'));

router.use('/community-tool-actions', require('./modules/community-tool-actions'));

router

.use('/members', require('./modules/members'));

router.use('/tools', require('./modules/tools'));

