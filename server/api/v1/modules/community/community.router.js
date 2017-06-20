const express = require('express');
const router = express.Router();
const communityCtrl = require('./community.controller');

router.get('/', (req, res) => {
  communityCtrl.getUserCommunity(req, res);
});

module.exports = router;
