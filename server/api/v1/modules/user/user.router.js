const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/getinfo', (req, res) => {
    // res.send('inside user info');
  const userdata = req.cookies.currentUser;
    // res.send(userdata);
  jwt.verify(userdata, 'secret key', (err, decoded) => {
    if (err) {
      res.status(500).send('server error');
    } else {
      res.send(decoded);
    }
  });
});
module.exports = router;
