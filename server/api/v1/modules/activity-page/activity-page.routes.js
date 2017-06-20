const express=require('express');
let router = express.Router();
const controller = require('./activity-page.controller');
router.get('/active',controller.retrieveAllPosters);
 
module.exports=router;

