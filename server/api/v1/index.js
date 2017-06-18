const router = require('express').Router();

router.use('/login', require('./modules/login'));

module.exports = router;
