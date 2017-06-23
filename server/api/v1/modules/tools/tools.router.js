const router = require('express').Router();
const toolsCtrl = require('./tools.controller');

router.get('/tools', (req, res) => {
  try {
    toolsCtrl.getTool(req.query.domain, (err, result) => {
      if (err) {
<<<<<<< HEAD
        // console.log('error');
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
        // console.log('got tool as : ',result);
=======
        res.status(500).send({ error: 'Internal error occurred....!' });
      } else {
>>>>>>> ff95ee252485682f0b2eb7132660297fdbee7d31
        res.status(200).send(result);
      }
    });
  } catch (err) {
    return res.status(500).send({
      error: 'Internal error occurred....!'
    });
  }
});

<<<<<<< HEAD
module.exports = router;

=======
module.exports = router;
>>>>>>> ff95ee252485682f0b2eb7132660297fdbee7d31
