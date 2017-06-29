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
    //   console.log('Error in API to get community templates, error: ', err);
      return done(err);
    }
    return done(null, res.body);
  });
}

function postNewcmmunityDetails(val, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/:domain`;
  request
  .post(url)
  .send(val) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err) {
    //   console.log('Error in API to get community templates, error: ', err);
      return done(err);
    }
    return done(null, res.body);
  });
}

module.exports = {
  getAllCommunityTemplates,
  postNewcmmunityDetails,
};
