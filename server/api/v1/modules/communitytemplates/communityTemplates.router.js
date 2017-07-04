const router = require('express').Router();
const templateCtrl = require('./communityTemplates.controller.js');
/**
* Returns list of community Templates
*
* Takes optional query parameter purpose
*/
router.get('/', (req, res) => {
  try {
    templateCtrl.getAllCommunityTemplates(req.query.purpose, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error in getting templates, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
  }
  return res.status(200).send(res);
});

module.exports = router;
