const express = require('express');

const router = express.Router();

const memberCtrl = require('./members.controller');

router.get('/members', memberCtrl.getMembers);
module.exports = router;
