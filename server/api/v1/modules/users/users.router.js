const express = require('express');
const router = express.Router();

router.patch('/', (req, res) => {
  res.send('User Updated Successfully');
});


module.exports = router;
