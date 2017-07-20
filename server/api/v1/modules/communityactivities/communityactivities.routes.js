const express = require('express');

const router = express.Router();

const controller = require('./communityactivities.controller');

/**
 * This API provides activity log entries for specified member
 * Allows further filters for specified communities
 * Pagination is supported
 * Query Parameters
 * - communities : Accepts comma separated community domain names and
 *  filters for activities of only those communities,
 *  by default considers all communities of the member
 * - sort : Sort by specific fields, supported ts, community, by default it is ts
 * - order : asc or desc, by default desc
 * - limit : number of activity entries to fetch per page, default is 20
 * - page : Current page number
 * * Effective URL is /memberactivitypage/:membername
 */
router.get('/:userName', (req, res) => {
  try {
    controller.getMemberActivities(req.params.userName, (err, result) => {
      if (err) {
        console.log("checking for counter",err);
        res.status(500).send({ error: 'Error in getting Activity details, please try later..!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
     console.log("checking for counter in error",err);
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

router.get('/community/:domainName', (req, res) => {
  try {
    controller.getDomainActivities(req.params.domainName, (err, result) => {
      if (err) {
        console.log("checking for counter",err);
        res.status(500).send({ error: 'Error in getting Activity details, please try later..!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
     console.log("checking for counter in error",err);
    return res.status(500).send({
      error: 'Internal error occurred....!' });
  }
});

module.exports = router;
