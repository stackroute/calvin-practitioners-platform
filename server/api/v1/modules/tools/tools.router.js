const router = require('express').Router();

const toolsCtrl= require('./tools.controller');



// router.get('/tools', (req, res) => {
//     memberCtrl.getTool();
//     res.send();
// });
router.get('/tools',toolsCtrl.getTool);

module.exports = router;