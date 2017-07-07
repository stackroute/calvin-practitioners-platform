
const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';


function getSpecificCommunity(domain, done) {
   // Call specific community on the basis of domain
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/${domain}`;
  request
 .get(url)
 .query({ domain }) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}

function updateSpecificCommunity(domain, form, done) {
   // Call communities service to get all the templates
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/${domain}`;
  request
 .patch(url)
 .send(form) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}


module.exports = {
  // GetCommunity,
  getSpecificCommunity,
  updateSpecificCommunity,
};

