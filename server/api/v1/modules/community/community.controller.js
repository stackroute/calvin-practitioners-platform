// use superagent to call communities
const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

const communityservice = require('./community.service');

function getUserCommunity(req, res) {
  communityservice.getAllUserCommunities(req, res);
}

// post new community data
function postNewcommunityDetails(domainName, newCommunityObj, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/${domainName}`;
  request
  .post(url)
  .send(newCommunityObj) // sends a JSON post body
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res.body);
  });
}

module.exports = {
  getUserCommunity,
  postNewcommunityDetails,
};
