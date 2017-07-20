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
router.get('/:membername', (req, res) => {
  try {
    controller.getMemberActivities((err, result) => {
      if (err) {
        res.status(500).send({ error: 'Error in getting community details, please try later..!' });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (err) {
    // console.log("inside route error", err)
    return res.status(500).send({error: 'Internal error occurred....!' });
  }
});



















// router.get('/:membername', (req, res) => {
//   try {
//     let communities = [];
//     const sort = 'ts';
//     const order = 'desc';
//     const limit = 20; 
//     const page = 1;
//     if (req.query.communities) {
//         // it will be comma separated list of domains,
//         // hence split them to get the array of domain name
//         // req.query.communities
//         // communities;
//         console.log("req.params.membername",req.params.membername);
//       const filteredMemberCommunities = controller
//       .filterMemberCommunities(req.params.membername, req.query.communities);
//       if (filteredMemberCommunities.length === 0) {
//         return res.status(500).send({
//           error: "Requested community doesn't exsit for the given member",
//         });
//       }
//       return res.send(filteredMemberCommunities);
//     }
//        return res.send(controller.getAllCommunitiesOfMember(req.params.membername));
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({
//       error: 'Error in operation, please try later..!',
//     });
//   }
// });

module.exports = router;
