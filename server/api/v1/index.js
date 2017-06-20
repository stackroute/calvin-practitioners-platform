const router = require('express').Router();

router.use('/login', require('./modules/login'));
router.use('/members',require('./modules/members'));
router.use('/tools',require('./modules/tools'));
module.exports = router;
//api