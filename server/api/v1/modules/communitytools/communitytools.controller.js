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
   console.log(res.body);
   return done(null, res.body);
 });
}

// module.exports = {
//   retrieveAllTools,
//  };
// const BASE_TOOLS_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function getTool(domain, done) {
  // console.log("i am at get tools", domain);
  // Call communities service to get all the templates
  const url = `${BASE_TOOLS_SERVICE_URL}/communitytools/${domain}/tools`;
  request
    .get(url)
    .query({ domain })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });
}

module.exports = {
  retrieveAllTools,
  getTool,
};
