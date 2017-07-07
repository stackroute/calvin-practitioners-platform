const express = require('express');

const router = express.Router();

const controller = require('./activity-page.controller');

/**
 * This API provides activity log entries for specified member
 * Allows further filters for specified communities
 * Pagination is supported
 * Query Parameters
 * - communities : Accepts comma separated community domain names and filters for activities of only those communities, by default considers all communities of the member
 * - sort : Sort by specific fields, supported ts, community, by default it is ts
 * - order : asc or desc, by default desc
 * - limit : number of activity entries to fetch per page, default is 20
 * - page : Current page number 
 * Effective URL is /memberactivitypage/:membername
 */
router.get('/:membername', (req, res) => {
    try {
        let communities = [];
        let sort = 'ts';
        let order = 'desc';
        let limit = 20;
        let page = 1;
        if (req.query.communities) {
            //it will be comma separated list of domains, hence split them to get the array of domain name
            //req.query.communities
            //communities;

            const filteredMemberCommunities = controller.filterMemberCommunities(req.params.membername, req.query.communities);
            if (filteredMemberCommunities.length === 0) {
                return res.status(500).send({
                    error: "Requested community doesn't exsit for the given member"
                });
            }
            else{
            return res.send(filteredMemberCommunities);
        }}
        if(req.query.limit){
            console.log("req.query.limit",req.query.limit);
            return res.send(controller.getLimitOfPages(req.query.limit));
        }
        return res.send(controller.getAllCommunitiesOfMember(req.params.membername));
        
    } catch (err) {
        console.log('this is the err', err);
        return res.status(500).send({
            error: 'Error in operation, please try later..!'
        });
    }
});

module.exports = router;