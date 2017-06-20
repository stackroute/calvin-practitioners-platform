const router = require('express').Router();

router.use('/login', require('./modules/login'));

router.use('/community-role-action', require('./modules/community-role-action'));

module.exports = router;
