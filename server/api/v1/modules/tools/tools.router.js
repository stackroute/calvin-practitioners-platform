const router = require('express').Router();
const toolsCtrl = require('./tools.controller');

router.get('/tools', toolsCtrl.getTool);
module.exports = router;
