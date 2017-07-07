const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function retrieveAllTools(domain, done) {
   // Call communities service to get all the templates
   console.log(domain);
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitytools/${domain}/tools`;
  request
 .get(url)
 .query({ domain }) // query string
 .end((err, res) => {
   if (err) {
     console.log('server.controller file');
     return done(err);
   }
     console.log('server.controller  success file');
console.log(res.body)
   return done(null, res.body);
 });
}

module.exports = {  
  retrieveAllTools,
 };