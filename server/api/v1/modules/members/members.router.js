const express = require('express');
const router = express.Router();

const memberCtrl= require('./members.controller');



// router.get('/tools', (req, res) => {
//     memberCtrl.getTool();
//     res.send();
// });
router.get('/members',memberCtrl.getMembers);

module.exports = router;