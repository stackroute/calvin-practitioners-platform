const express = require('express');

const router = express.Router();

const toolCtrl = require('./toolmarketplace.controller');


router.get('/', (req, res) => {
  try {
    toolCtrl.getAllTools((err, result) => {
      if (err) {
        res.status(500).json({
          error: `unable to get tool in Calvin..! , Please try again later${err}`,
        });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).json({
      error: `Internal server error..! Please try again later${error}`,
    });
  }
});

router.get('/actions/:toolid', (req, res) => {
  //// console.log("toolaction",req.params.toolid);
  try {
    toolCtrl.getToolAction(req.params.toolid, (err, result) => {
      if (err) {
        res.status(500).json({
          error: `unable to get toolactions in Calvin..! , Please try again later${err}`,
        });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).json({
      error: `Internal server error..! Please try again later${error}`,
    });
  }
});

router.get('/events/:toolid', (req, res) => {
  // console.log("toolevents", req.params.toolid);
  try {
    toolCtrl.getToolEvent(req.params.toolid, (err, result) => {
      if (err) {
        res.status(500).json({
          error: `unable to get toolEvent in Calvin..! , Please try again later${err}`,
        });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).json({
      error: `Internal server error..! Please try again later${error}`,
    });
  }
});

router.get('/tool/:toolid', (req, res) => {
  //// console.log('inside toolpage APi', req.params.toolid);

  try {
    toolCtrl.getTool(req.params.toolid, (err, result) => {
      if (err) {
        //// console.log('error is ', err);
        res.status(500).json({
          error: 'unable to get tool in Calvin..! , Please try again later',
        });
      } else {
        //// console.log('result in router', result);
        res.status(200).json(result);
      }
    });
  } catch (error) {
    // // console.log('catch err', error);
    res.status(500).json({
      error: 'Internal server error..! Please try again later',
    });
  }
});

router.post('/tool', (req, res) => {
  //// console.log(' printing body :', req.body);
  const tool = req.body;
  try {
    toolCtrl.addTool(tool, (err) => {
      if (err) {
        // // console.log('error occured');
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
