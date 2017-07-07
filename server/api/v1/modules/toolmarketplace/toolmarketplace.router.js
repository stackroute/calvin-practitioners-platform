const express = require('express');

const router = express.Router();

const toolCtrl = require('./toolmarketplace.controller');


router.get('/tool/:toolid', (req, res) => {
  console.log('tool is is...',req.url.split('/')[2]);
  toolid=req.url.split('/')[2];
  try {
    toolCtrl.getTool(toolid,(err, result) => {
      if (err) {
        res.status(500).json({
          error: 'unable to add tool in Calvin..! , Please try again later',
        });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.send(500).json({
      error: 'Internal server error..! Please try again later',
    });
  }
  // res.send('called inside tool'+req.url);
});


router.post('/tool', (req, res) => {
  console.log(' printing body :', req.body);
  const tool = req.body;
  try {
    toolCtrl.addTool(tool, (err, result) => {
      if (err) {
        console.log('error occured');
        res.status(500).json({
          error: 'unable to add tool in Calvin..! , Please try again later',
        });
      } else {
        res.status(200).json({
          error: 'Added Tool Successfully',
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error..! Please try again later',
    });
  }
//  res.json({success:"tool added"});
});

module.exports = router;
