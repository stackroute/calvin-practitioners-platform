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
        // console.log('Error: ', err);
        return res.status(500).send({ error: 'Error in getting templates, please try later..!' });
      }
      return res.status(200).send(result);
    });
  } catch (err) {
    // console.log('Unexpected exception in templateCtrl.getAllCommunityTemplates, error: ', err);
    return res.status(500).send({ error: 'Unexpected internal error occurred...!' });
  }
  return res.status(200).send(res);
});

router.post('/:domainName', (req, res) => {
  try {
    req.body.domain = req.params.domain;
    templateCtrl.postNewcmmunityDetails(req.body, (err, results) => {
      if (err) {
        // console.log('Error in posting templates, please try later..!', err);
        return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
      }
      return res.status(200).send(results);
    });
  } catch (err) {
    // console.log('Unexpected error in posting community ', err);
    return res.status(500).send({ error: 'Unexpected error occurred, try again later' });
  }
  return res.status(200).send(res);
});

module.exports = router;
