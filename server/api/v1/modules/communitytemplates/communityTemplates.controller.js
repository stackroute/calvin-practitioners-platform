const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function getAllCommunityTemplates(purpose, done) {
    // Call communities service to get all the templates
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitytemplates`;
  request
  .get(url)
  .query({ purpose }) // query string
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res.body);
  });
}

module.exports = {
  getAllCommunityTemplates,
};
