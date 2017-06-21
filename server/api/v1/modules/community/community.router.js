const router = require('express').Router();

const communityCtrl = require('./community.controller');

router.get('/getcom', communityCtrl.getcommunity);


module.exports = router;

