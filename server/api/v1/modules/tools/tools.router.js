const router = require('express').Router();
const toolsCtrl = require('./tools.controller');

router.get('/tools', (req, res) => {
  try {
    console.log('1.inside tools.....');
    toolsCtrl.getTool(req.query.domain,(err,result) => {
             if(err)
             {
               //console.log('error');
               res.status(500).send({ error: 'Internal error occurred....!' });
             } 
            else {
              //console.log('got tool as : ',result);
              res.status(200).send(result);
            } 
      });
    
  } catch (err) {
    //console.log('catch ewrr');
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

module.exports = router;

