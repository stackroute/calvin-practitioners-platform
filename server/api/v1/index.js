const router = require('express').Router();

router.use('/login', require('./modules/login'));
router.use('/activity',require('./modules/activity-page'));
module.exports = router;
